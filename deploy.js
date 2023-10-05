/* eslint-disable */
const { NodeSSH } = require('node-ssh');
const path = require('path');
const walk = require('walk-sync');
const deployConfig = require('./deploy.configs.js');
const dotenv = require('dotenv')

dotenv.config()
let timer = 0;
deploy();

async function deploy() {
    const stand = process.env.STAND || process.argv[2]
    console.log(stand);
    const ssh = new NodeSSH();
    const configs = deployConfig[stand];
    const buildPath = getBuildPath();
    const buildFiles = getEntries(buildPath);
    const publicPath = getPublicPath('');
    const reactPath = `${publicPath}/${configs.relativePath}`;

    const password = process.env.PASSWORD || deployConfig[stand].password

    while (true) {
        let connection;
        try {
            connection = await ssh.connect({
                host: configs.host,
                username: configs.username,
                password: password,
                port: configs.port,
            });

            const deployBuildResult = await deployBuild(ssh, buildFiles);
            if (!deployBuildResult.success) {
                console.error(deployBuildResult.error);
            }

            connection.dispose();
        } catch (e) {
            console.error('CUSTOM ERROR', e);
        }
        break;
    }

    async function deployBuild(ssh, buildFiles) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log('Creating a backup of the previous build...');
                await ssh
                    .execCommand(`cp -r ${configs.relativePath} backups`, {
                        cwd: publicPath,
                    })
                    .then(() =>
                        ssh.execCommand(`rm -r backups/${reactPath}`, {
                            cwd: publicPath,
                        })
                    );
                console.log('Backup created successfully.');
            } catch (error) {
                console.error('Failed to create a backup:', error);
                reject({ success: false, error });
                return;
            }

            ssh.execCommand(`rm -r ${reactPath} &>/dev/null`, {
                cwd: publicPath,
            })
                .then(({ stderr }) => {
                    if (stderr) {
                        console.log('get ERROR:', stderr);
                        return { success: false, error: stderr };
                    }
                    // console.log(`Создание`);
                    return { success: true };
                })
                .then(async ({ success, error }) => {
                    if (success) {
                        // eslint-disable-next-line no-plusplus
                        for (let i = 0; i < buildFiles.length; i++) {
                            const entry = buildFiles[i];
                            const from = path.join(
                                buildPath,
                                entry.relativePath
                            );
                            const to = path.posix.join(
                                path.posix.normalize(reactPath),
                                entry.relativePath
                            );
                            try {
                                if (entry.isDirectory()) {
                                    timer += 1;
                                    console.log(
                                        '==================================================\n',
                                        `${timer}. - ${entry.relativePath} - folder created\n`,
                                        '=================================================='
                                    );
                                    await ssh.mkdir(to);
                                } else {
                                    timer += 1;
                                    console.log(
                                        `${timer}. - ${entry.relativePath} - is uploaded`
                                    );
                                    await ssh.putFile(from, to);
                                }
                            } catch (error) {
                                reject({ success: false });
                            }
                        }
                        resolve({ success: true });
                    } else {
                        reject({ success, error });
                    }
                });
        });
    }
}

function getEntries(path) {
    return walk.entries(path, { directories: true });
}

function getBuildPath() {
    // const path = require('path');
    console.log(
        'path normalizer',
        path.normalize(path.join(__dirname, 'build'))
    );
    return path.normalize(path.join(__dirname, 'build'));
}

function getPublicPath() {
    return '/home/admin/sites';
}
