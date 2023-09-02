import React, { useEffect, useState } from 'react';
import { CardSyphilis } from '../../../utils/types/documentType';
import { CardSyphilisData } from '../../../utils/types/enums/documentEnums';
import '../mainDocument/mainDocument.scss';
import Sidebar from '../../../components/document/sidebar/Sidebar';
import InputBlock from '../../../components/document/inputBlock/InputBlock';
import {
    examinationOfGenitalsPerianalArea,
    externalInspection,
    lipCondition,
    oralMucosaTongue,
    palpationOfLymphNodes,
    patientComplaints,
    presenceOfBoneDestruction,
} from './blockInputs';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { axiosCardRequest } from '../../../utils/request/NewAxiosRequest';
import { message } from 'antd';

const SyphilisData = () => {
    const { pathname } = useLocation();
    const pathParts = pathname.split('/')[3];
    const { id, protocolId } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<CardSyphilis>({
        [CardSyphilisData.DecreasedVision]: null,
        [CardSyphilisData.DecreasedHearing]: null,
        [CardSyphilisData.DecreasedMemory]: null,
        [CardSyphilisData.Incoordination]: null,
        [CardSyphilisData.HairAllopecia]: null,
        [CardSyphilisData.HairPapula]: null,
        [CardSyphilisData.HairPustula]: null,
        [CardSyphilisData.HairCrust]: null,
        [CardSyphilisData.TongueSpots]: null,
        [CardSyphilisData.TonguePapula]: null,
        [CardSyphilisData.TongueErosion]: null,
        [CardSyphilisData.TongueUlcers]: null,
        [CardSyphilisData.TongueAngina]: null,
        [CardSyphilisData.TongueTonsils]: null,
        [CardSyphilisData.LipsPapula]: null,
        [CardSyphilisData.LipsJammed]: null,
        [CardSyphilisData.LipsErosion]: null,
        [CardSyphilisData.VoiceHoarseness]: null,
        [CardSyphilisData.CervicalLymph]: null,
        [CardSyphilisData.SubmandibularLymph]: null,
        [CardSyphilisData.AxillaryLymph]: null,
        [CardSyphilisData.ElbowLymph]: null,
        [CardSyphilisData.InguinalLymph]: null,
        [CardSyphilisData.BoneSaddleNose]: null,
        [CardSyphilisData.BoneHighGothicPalate]: null,
        [CardSyphilisData.BoneHutchinsonTeeth]: null,
        [CardSyphilisData.BoneXiphoidProcess]: null,
        [CardSyphilisData.BoneSaberTibia]: null,
        [CardSyphilisData.GenitaliaSpots]: null,
        [CardSyphilisData.GenitaliaPapula]: null,
        [CardSyphilisData.GenitaliaErosion]: null,
        [CardSyphilisData.GenitaliaUlcers]: null,
        [CardSyphilisData.CardId]: +id,
    });

    useEffect(() => {
        if (pathParts === 'edit') {
            const getData = async () => {
                const { data } = await axiosCardRequest.get<CardSyphilis>(
                    `/Syphilis/Index/${id}`
                );
                setFormData({
                    ...data,
                    [CardSyphilisData.DecreasedVision]:
                        data.DecreasedVision === null
                            ? null
                            : data.DecreasedVision
                            ? '1'
                            : '0',
                    [CardSyphilisData.DecreasedHearing]:
                        data.DecreasedHearing === null
                            ? null
                            : data.DecreasedHearing
                            ? '1'
                            : '0',
                    [CardSyphilisData.DecreasedMemory]:
                        data.DecreasedMemory === null
                            ? null
                            : data.DecreasedMemory
                            ? '1'
                            : '0',
                    [CardSyphilisData.Incoordination]:
                        data.Incoordination === null
                            ? null
                            : data.Incoordination
                            ? '1'
                            : '0',
                    [CardSyphilisData.HairAllopecia]:
                        data.HairAllopecia === null
                            ? null
                            : data.HairAllopecia
                            ? '1'
                            : '0',
                    [CardSyphilisData.HairPapula]:
                        data.HairPapula === null
                            ? null
                            : data.HairPapula
                            ? '1'
                            : '0',
                    [CardSyphilisData.HairPustula]:
                        data.HairPustula === null
                            ? null
                            : data.HairPustula
                            ? '1'
                            : '0',
                    [CardSyphilisData.HairCrust]:
                        data.HairCrust === null
                            ? null
                            : data.HairCrust
                            ? '1'
                            : '0',
                    [CardSyphilisData.TongueSpots]:
                        data.TongueSpots === null
                            ? null
                            : data.TongueSpots
                            ? '1'
                            : '0',
                    [CardSyphilisData.TonguePapula]:
                        data.TonguePapula === null
                            ? null
                            : data.TonguePapula
                            ? '1'
                            : '0',
                    [CardSyphilisData.TongueErosion]:
                        data.TongueErosion === null
                            ? null
                            : data.TongueErosion
                            ? '1'
                            : '0',
                    [CardSyphilisData.TongueUlcers]:
                        data.TongueUlcers === null
                            ? null
                            : data.TongueUlcers
                            ? '1'
                            : '0',
                    [CardSyphilisData.TongueAngina]:
                        data.TongueAngina === null
                            ? null
                            : data.TongueAngina
                            ? '1'
                            : '0',
                    [CardSyphilisData.TongueTonsils]:
                        data.TongueTonsils === null
                            ? null
                            : data.TongueTonsils
                            ? '1'
                            : '0',
                    [CardSyphilisData.LipsPapula]:
                        data.LipsPapula === null
                            ? null
                            : data.LipsPapula
                            ? '1'
                            : '0',
                    [CardSyphilisData.LipsJammed]:
                        data.LipsJammed === null
                            ? null
                            : data.LipsJammed
                            ? '1'
                            : '0',
                    [CardSyphilisData.LipsErosion]:
                        data.LipsErosion === null
                            ? null
                            : data.LipsErosion
                            ? '1'
                            : '0',
                    [CardSyphilisData.VoiceHoarseness]:
                        data.VoiceHoarseness === null
                            ? null
                            : data.VoiceHoarseness
                            ? '1'
                            : '0',
                    [CardSyphilisData.CervicalLymph]:
                        data.CervicalLymph === null
                            ? null
                            : data.CervicalLymph
                            ? '1'
                            : '0',
                    [CardSyphilisData.SubmandibularLymph]:
                        data.SubmandibularLymph === null
                            ? null
                            : data.SubmandibularLymph
                            ? '1'
                            : '0',
                    [CardSyphilisData.AxillaryLymph]:
                        data.AxillaryLymph === null
                            ? null
                            : data.AxillaryLymph
                            ? '1'
                            : '0',
                    [CardSyphilisData.ElbowLymph]:
                        data.ElbowLymph === null
                            ? null
                            : data.ElbowLymph
                            ? '1'
                            : '0',
                    [CardSyphilisData.InguinalLymph]:
                        data.InguinalLymph === null
                            ? null
                            : data.InguinalLymph
                            ? '1'
                            : '0',
                    [CardSyphilisData.BoneSaddleNose]:
                        data.BoneSaddleNose === null
                            ? null
                            : data.BoneSaddleNose
                            ? '1'
                            : '0',
                    [CardSyphilisData.BoneHighGothicPalate]:
                        data.BoneHighGothicPalate === null
                            ? null
                            : data.BoneHighGothicPalate
                            ? '1'
                            : '0',
                    [CardSyphilisData.BoneHutchinsonTeeth]:
                        data.BoneHutchinsonTeeth === null
                            ? null
                            : data.BoneHutchinsonTeeth
                            ? '1'
                            : '0',
                    [CardSyphilisData.BoneXiphoidProcess]:
                        data.BoneXiphoidProcess === null
                            ? null
                            : data.BoneXiphoidProcess
                            ? '1'
                            : '0',
                    [CardSyphilisData.BoneSaberTibia]:
                        data.BoneSaberTibia === null
                            ? null
                            : data.BoneSaberTibia
                            ? '1'
                            : '0',
                    [CardSyphilisData.GenitaliaSpots]:
                        data.GenitaliaSpots === null
                            ? null
                            : data.GenitaliaSpots
                            ? '1'
                            : '0',
                    [CardSyphilisData.GenitaliaPapula]:
                        data.GenitaliaPapula === null
                            ? null
                            : data.GenitaliaPapula
                            ? '1'
                            : '0',
                    [CardSyphilisData.GenitaliaErosion]:
                        data.GenitaliaErosion === null
                            ? null
                            : data.GenitaliaErosion
                            ? '1'
                            : '0',
                    [CardSyphilisData.GenitaliaUlcers]:
                        data.GenitaliaUlcers === null
                            ? null
                            : data.GenitaliaUlcers
                            ? '1'
                            : '0',
                });
            };

            getData();
        }
    }, []);

    const handleCreateDoc = async () => {
        try {
            await axiosCardRequest.post('/Syphilis/Create', {
                ...formData,
                [CardSyphilisData.DecreasedVision]:
                    formData.DecreasedVision === null
                        ? null
                        : Boolean(+formData.DecreasedVision),
                [CardSyphilisData.DecreasedHearing]:
                    formData.DecreasedHearing === null
                        ? null
                        : Boolean(+formData.DecreasedHearing),
                [CardSyphilisData.DecreasedMemory]:
                    formData.DecreasedMemory === null
                        ? null
                        : Boolean(+formData.DecreasedMemory),
                [CardSyphilisData.Incoordination]:
                    formData.Incoordination === null
                        ? null
                        : Boolean(+formData.Incoordination),
                [CardSyphilisData.HairAllopecia]:
                    formData.HairAllopecia === null
                        ? null
                        : Boolean(+formData.HairAllopecia),
                [CardSyphilisData.HairPapula]:
                    formData.HairPapula === null
                        ? null
                        : Boolean(+formData.HairPapula),
                [CardSyphilisData.HairPustula]:
                    formData.HairPustula === null
                        ? null
                        : Boolean(+formData.HairPustula),
                [CardSyphilisData.HairCrust]:
                    formData.HairCrust === null
                        ? null
                        : Boolean(+formData.HairCrust),
                [CardSyphilisData.TongueSpots]:
                    formData.TongueSpots === null
                        ? null
                        : Boolean(+formData.TongueSpots),
                [CardSyphilisData.TonguePapula]:
                    formData.TonguePapula === null
                        ? null
                        : Boolean(+formData.TonguePapula),
                [CardSyphilisData.TongueErosion]:
                    formData.TongueErosion === null
                        ? null
                        : Boolean(+formData.TongueErosion),
                [CardSyphilisData.TongueUlcers]:
                    formData.TongueUlcers === null
                        ? null
                        : Boolean(+formData.TongueUlcers),
                [CardSyphilisData.TongueAngina]:
                    formData.TongueAngina === null
                        ? null
                        : Boolean(+formData.TongueAngina),
                [CardSyphilisData.TongueTonsils]:
                    formData.TongueTonsils === null
                        ? null
                        : Boolean(+formData.TongueTonsils),
                [CardSyphilisData.LipsPapula]:
                    formData.LipsPapula === null
                        ? null
                        : Boolean(+formData.LipsPapula),
                [CardSyphilisData.LipsJammed]:
                    formData.LipsJammed === null
                        ? null
                        : Boolean(+formData.LipsJammed),
                [CardSyphilisData.LipsErosion]:
                    formData.LipsErosion === null
                        ? null
                        : Boolean(+formData.LipsErosion),
                [CardSyphilisData.VoiceHoarseness]:
                    formData.VoiceHoarseness === null
                        ? null
                        : Boolean(+formData.VoiceHoarseness),
                [CardSyphilisData.CervicalLymph]:
                    formData.CervicalLymph === null
                        ? null
                        : Boolean(+formData.CervicalLymph),
                [CardSyphilisData.SubmandibularLymph]:
                    formData.SubmandibularLymph === null
                        ? null
                        : Boolean(+formData.SubmandibularLymph),
                [CardSyphilisData.AxillaryLymph]:
                    formData.AxillaryLymph === null
                        ? null
                        : Boolean(+formData.AxillaryLymph),
                [CardSyphilisData.ElbowLymph]:
                    formData.ElbowLymph === null
                        ? null
                        : Boolean(+formData.ElbowLymph),
                [CardSyphilisData.InguinalLymph]:
                    formData.InguinalLymph === null
                        ? null
                        : Boolean(+formData.InguinalLymph),
                [CardSyphilisData.BoneSaddleNose]:
                    formData.BoneSaddleNose === null
                        ? null
                        : Boolean(+formData.BoneSaddleNose),
                [CardSyphilisData.BoneHighGothicPalate]:
                    formData.BoneHighGothicPalate === null
                        ? null
                        : Boolean(+formData.BoneHighGothicPalate),
                [CardSyphilisData.BoneHutchinsonTeeth]:
                    formData.BoneHutchinsonTeeth === null
                        ? null
                        : Boolean(+formData.BoneHutchinsonTeeth),
                [CardSyphilisData.BoneXiphoidProcess]:
                    formData.BoneXiphoidProcess === null
                        ? null
                        : Boolean(+formData.BoneXiphoidProcess),
                [CardSyphilisData.BoneSaberTibia]:
                    formData.BoneSaberTibia === null
                        ? null
                        : Boolean(+formData.BoneSaberTibia),
                [CardSyphilisData.GenitaliaSpots]:
                    formData.GenitaliaSpots === null
                        ? null
                        : Boolean(+formData.GenitaliaSpots),
                [CardSyphilisData.GenitaliaPapula]:
                    formData.GenitaliaPapula === null
                        ? null
                        : Boolean(+formData.GenitaliaPapula),
                [CardSyphilisData.GenitaliaErosion]:
                    formData.GenitaliaErosion === null
                        ? null
                        : Boolean(+formData.GenitaliaErosion),
                [CardSyphilisData.GenitaliaUlcers]:
                    formData.GenitaliaUlcers === null
                        ? null
                        : Boolean(+formData.GenitaliaUlcers),
                [CardSyphilisData.CardId]: +id,
            });
            navigate(`/documents/${protocolId}`);
        } catch (error) {
            console.log(error);
            const errorMessage = (
                <div className='error-message-container'>
                    <span className='font-span'>
                        Ошибка при создании документа.
                    </span>
                </div>
            );
            message.error(errorMessage, 4);
        }
    };

    const handleEditDoc = async () => {
        try {
            await axiosCardRequest.post('/Syphilis/Edit', {
                ...formData,
                [CardSyphilisData.DecreasedVision]:
                    formData.DecreasedVision === null
                        ? null
                        : Boolean(+formData.DecreasedVision),
                [CardSyphilisData.DecreasedHearing]:
                    formData.DecreasedHearing === null
                        ? null
                        : Boolean(+formData.DecreasedHearing),
                [CardSyphilisData.DecreasedMemory]:
                    formData.DecreasedMemory === null
                        ? null
                        : Boolean(+formData.DecreasedMemory),
                [CardSyphilisData.Incoordination]:
                    formData.Incoordination === null
                        ? null
                        : Boolean(+formData.Incoordination),
                [CardSyphilisData.HairAllopecia]:
                    formData.HairAllopecia === null
                        ? null
                        : Boolean(+formData.HairAllopecia),
                [CardSyphilisData.HairPapula]:
                    formData.HairPapula === null
                        ? null
                        : Boolean(+formData.HairPapula),
                [CardSyphilisData.HairPustula]:
                    formData.HairPustula === null
                        ? null
                        : Boolean(+formData.HairPustula),
                [CardSyphilisData.HairCrust]:
                    formData.HairCrust === null
                        ? null
                        : Boolean(+formData.HairCrust),
                [CardSyphilisData.TongueSpots]:
                    formData.TongueSpots === null
                        ? null
                        : Boolean(+formData.TongueSpots),
                [CardSyphilisData.TonguePapula]:
                    formData.TonguePapula === null
                        ? null
                        : Boolean(+formData.TonguePapula),
                [CardSyphilisData.TongueErosion]:
                    formData.TongueErosion === null
                        ? null
                        : Boolean(+formData.TongueErosion),
                [CardSyphilisData.TongueUlcers]:
                    formData.TongueUlcers === null
                        ? null
                        : Boolean(+formData.TongueUlcers),
                [CardSyphilisData.TongueAngina]:
                    formData.TongueAngina === null
                        ? null
                        : Boolean(+formData.TongueAngina),
                [CardSyphilisData.TongueTonsils]:
                    formData.TongueTonsils === null
                        ? null
                        : Boolean(+formData.TongueTonsils),
                [CardSyphilisData.LipsPapula]:
                    formData.LipsPapula === null
                        ? null
                        : Boolean(+formData.LipsPapula),
                [CardSyphilisData.LipsJammed]:
                    formData.LipsJammed === null
                        ? null
                        : Boolean(+formData.LipsJammed),
                [CardSyphilisData.LipsErosion]:
                    formData.LipsErosion === null
                        ? null
                        : Boolean(+formData.LipsErosion),
                [CardSyphilisData.VoiceHoarseness]:
                    formData.VoiceHoarseness === null
                        ? null
                        : Boolean(+formData.VoiceHoarseness),
                [CardSyphilisData.CervicalLymph]:
                    formData.CervicalLymph === null
                        ? null
                        : Boolean(+formData.CervicalLymph),
                [CardSyphilisData.SubmandibularLymph]:
                    formData.SubmandibularLymph === null
                        ? null
                        : Boolean(+formData.SubmandibularLymph),
                [CardSyphilisData.AxillaryLymph]:
                    formData.AxillaryLymph === null
                        ? null
                        : Boolean(+formData.AxillaryLymph),
                [CardSyphilisData.ElbowLymph]:
                    formData.ElbowLymph === null
                        ? null
                        : Boolean(+formData.ElbowLymph),
                [CardSyphilisData.InguinalLymph]:
                    formData.InguinalLymph === null
                        ? null
                        : Boolean(+formData.InguinalLymph),
                [CardSyphilisData.BoneSaddleNose]:
                    formData.BoneSaddleNose === null
                        ? null
                        : Boolean(+formData.BoneSaddleNose),
                [CardSyphilisData.BoneHighGothicPalate]:
                    formData.BoneHighGothicPalate === null
                        ? null
                        : Boolean(+formData.BoneHighGothicPalate),
                [CardSyphilisData.BoneHutchinsonTeeth]:
                    formData.BoneHutchinsonTeeth === null
                        ? null
                        : Boolean(+formData.BoneHutchinsonTeeth),
                [CardSyphilisData.BoneXiphoidProcess]:
                    formData.BoneXiphoidProcess === null
                        ? null
                        : Boolean(+formData.BoneXiphoidProcess),
                [CardSyphilisData.BoneSaberTibia]:
                    formData.BoneSaberTibia === null
                        ? null
                        : Boolean(+formData.BoneSaberTibia),
                [CardSyphilisData.GenitaliaSpots]:
                    formData.GenitaliaSpots === null
                        ? null
                        : Boolean(+formData.GenitaliaSpots),
                [CardSyphilisData.GenitaliaPapula]:
                    formData.GenitaliaPapula === null
                        ? null
                        : Boolean(+formData.GenitaliaPapula),
                [CardSyphilisData.GenitaliaErosion]:
                    formData.GenitaliaErosion === null
                        ? null
                        : Boolean(+formData.GenitaliaErosion),
                [CardSyphilisData.GenitaliaUlcers]:
                    formData.GenitaliaUlcers === null
                        ? null
                        : Boolean(+formData.GenitaliaUlcers),
                [CardSyphilisData.CardId]: +id,
            });
            navigate(`/documents/${protocolId}`);
        } catch (error) {
            console.log(error);
            const errorMessage = (
                <div className='error-message-container'>
                    <span className='font-span'>
                        Ошибка при создании документа.
                    </span>
                </div>
            );
            message.error(errorMessage, 4);
        }
    };

    return (
        <div className='layout'>
            <Sidebar />
            <div className='document-data'>
                <div className='document-data-block'>
                    <div className='document-data-block-info'>
                        <InputBlock
                            title='Жалобы больного'
                            items={patientComplaints(setFormData, formData)}
                        />
                        <InputBlock
                            title='Наружный осмотр'
                            items={externalInspection(setFormData, formData)}
                        />
                        <InputBlock
                            title='Слизистая полости рта, язык'
                            items={oralMucosaTongue(setFormData, formData)}
                        />
                        <InputBlock
                            title='Cостояние губ'
                            items={lipCondition(setFormData, formData)}
                        />
                        <InputBlock
                            title='Пальпация лимфатических узлов'
                            items={palpationOfLymphNodes(setFormData, formData)}
                        />
                        <InputBlock
                            title='Наличие костных деструкций'
                            items={presenceOfBoneDestruction(
                                setFormData,
                                formData
                            )}
                        />
                        <InputBlock
                            title='Осмотр гениталий и перианальной области (для врачей акушеров гинекологов, урологов, проктологов)'
                            items={examinationOfGenitalsPerianalArea(
                                setFormData,
                                formData
                            )}
                        />
                        {pathParts === 'edit' ? (
                            <button
                                onClick={handleEditDoc}
                                style={{
                                    alignSelf: 'center',
                                    justifySelf: 'center',
                                }}
                            >
                                Изменить
                            </button>
                        ) : (
                            <button
                                onClick={handleCreateDoc}
                                style={{
                                    alignSelf: 'center',
                                    justifySelf: 'center',
                                }}
                            >
                                Сохранить
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SyphilisData;
