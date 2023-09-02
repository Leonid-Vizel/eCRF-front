// {
//     "openapi": "3.0.1",
//     "info": {
//     "title": "MedicalCard API",
//         "version": "v1"
// },
//     "paths": {
//     "/Card/List": {
//         "get": {
//             "tags": [
//                 "Card"
//             ],
//                 "summary": "Возвращает список медицинских карт",
//                 "parameters": [
//                 {
//                     "name": "page",
//                     "in": "query",
//                     "description": "Номер страницы (>0)",
//                     "style": "form",
//                     "schema": {
//                         "type": "integer",
//                         "format": "int32"
//                     }
//                 }
//             ],
//                 "responses": {
//                 "200": {
//                     "description": "Запрос успешно выполнен",
//                         "content": {
//                         "text/plain": {
//                             "schema": {
//                                 "$ref": "#/components/schemas/CardListModel"
//                             }
//                         },
//                         "application/json": {
//                             "schema": {
//                                 "$ref": "#/components/schemas/CardListModel"
//                             }
//                         },
//                         "text/json": {
//                             "schema": {
//                                 "$ref": "#/components/schemas/CardListModel"
//                             }
//                         }
//                     }
//                 },
//                 "401": {
//                     "description": "Ошибка аутентификации"
//                 },
//                 "404": {
//                     "description": "Карта не найдена"
//                 }
//             }
//         }
//     },
//     "/Card/Index/{id}": {
//         "get": {
//             "tags": [
//                 "Card"
//             ],
//                 "summary": "Возвращает объект медициенской карты по id",
//                 "parameters": [
//                 {
//                     "name": "id",
//                     "in": "path",
//                     "required": true,
//                     "style": "simple",
//                     "schema": {
//                         "type": "integer",
//                         "format": "int32"
//                     }
//                 }
//             ],
//                 "responses": {
//                 "200": {
//                     "description": "Запрос успешно выполнен",
//                         "content": {
//                         "text/plain": {
//                             "schema": {
//                                 "$ref": "#/components/schemas/Card"
//                             }
//                         },
//                         "application/json": {
//                             "schema": {
//                                 "$ref": "#/components/schemas/Card"
//                             }
//                         },
//                         "text/json": {
//                             "schema": {
//                                 "$ref": "#/components/schemas/Card"
//                             }
//                         }
//                     }
//                 },
//                 "401": {
//                     "description": "Ошибка аутентификации"
//                 },
//                 "404": {
//                     "description": "Карта не найдена"
//                 }
//             }
//         }
//     },
//     "/Card/Create": {
//         "post": {
//             "tags": [
//                 "Card"
//             ],
//                 "summary": "Создаёт медицинскую карту и возвращает её id",
//                 "parameters": [
//                 {
//                     "name": "Deseases",
//                     "in": "query",
//                     "style": "form",
//                     "schema": {
//                         "type": "array",
//                         "items": {
//                             "$ref": "#/components/schemas/CardDeseaseCreateModel"
//                         }
//                     }
//                 },
//                 {
//                     "name": "Diagnosis",
//                     "in": "query",
//                     "style": "form",
//                     "schema": {
//                         "type": "array",
//                         "items": {
//                             "$ref": "#/components/schemas/CardDiagnosisCreateModel"
//                         }
//                     }
//                 },
//                 {
//                     "name": "CreateDate",
//                     "in": "query",
//                     "description": "Дата заполнения медицинской карты",
//                     "required": true,
//                     "style": "form",
//                     "schema": {
//                         "type": "string",
//                         "format": "date"
//                     }
//                 },
//                 {
//                     "name": "FirstName",
//                     "in": "query",
//                     "description": "Имя",
//                     "required": true,
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "SecondName",
//                     "in": "query",
//                     "description": "Фамилия",
//                     "required": true,
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "ThirdName",
//                     "in": "query",
//                     "description": "Отчество",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "Sex",
//                     "in": "query",
//                     "description": "Пол\n\n1 = Male (Мужчина)\n\n2 = Female (Женщина)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/Sex"
//                     }
//                 },
//                 {
//                     "name": "BirthDate",
//                     "in": "query",
//                     "description": "Дата рождения",
//                     "style": "form",
//                     "schema": {
//                         "type": "string",
//                         "format": "date"
//                     }
//                 },
//                 {
//                     "name": "Subject",
//                     "in": "query",
//                     "description": "Субъект Российской Федерации",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "District",
//                     "in": "query",
//                     "description": "Район",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "City",
//                     "in": "query",
//                     "description": "Город",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "Community",
//                     "in": "query",
//                     "description": "Населённый пункт",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "Street",
//                     "in": "query",
//                     "description": "Улица",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "House",
//                     "in": "query",
//                     "description": "Дом",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 500,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "Flat",
//                     "in": "query",
//                     "description": "Квартира",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 500,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "Phone",
//                     "in": "query",
//                     "description": "Телефон",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 100,
//                         "type": "string",
//                         "format": "tel"
//                     }
//                 },
//                 {
//                     "name": "Locality",
//                     "in": "query",
//                     "description": "Местность\n\n1 = City (Городская местность)\n\n2 = Country (Сельская местность)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/Locality"
//                     }
//                 },
//                 {
//                     "name": "CHIseries",
//                     "in": "query",
//                     "description": "Полис ОМС - Серия",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 100,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "CHInumber",
//                     "in": "query",
//                     "description": "Полис ОМС - Номер",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 100,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "SNILS",
//                     "in": "query",
//                     "description": "СНИЛС",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 100,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "InsuranceMedicalOrganization",
//                     "in": "query",
//                     "description": "Наименование страховой медицинской организации",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 100,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "BenefitCategoryCode",
//                     "in": "query",
//                     "description": "Код категории льготы",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 100,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "DocumentName",
//                     "in": "query",
//                     "description": "Документ - Название",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 100,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "DocumentSeries",
//                     "in": "query",
//                     "description": "Документ - Серия",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 100,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "DocumentNumber",
//                     "in": "query",
//                     "description": "Документ - Номер",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 100,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "Family",
//                     "in": "query",
//                     "description": "Семейное положение\n\n1 = Married (Состоит в зарегистрированном браке)\n\n2 = NotMarried (Не состоит в браке)\n\n3 = Unknown (Неизвестно [Должно быть по умолчанию])",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/Family"
//                     }
//                 },
//                 {
//                     "name": "Education",
//                     "in": "query",
//                     "description": "Образование\n\n1 = High (Высшее)\n\n2 = Secondary (Среднее)\n\n3 = GeneralSecondary (Общее: среднее)\n\n4 = Basic (Основное)\n\n5 = Elementary (Начальное)\n\n6 = Unknown (Неизвестно [Должно быть по умолчанию])",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/Education"
//                     }
//                 },
//                 {
//                     "name": "Work",
//                     "in": "query",
//                     "description": "Занятость\n\n1 = Working (Работает)\n\n2 = Military (Проходит военную службу и приравненную к ней службу)\n\n3 = Old (Пенсионер(ка))\n\n4 = Student (Студент(ка))\n\n5 = NotWorking (Не работает)\n\n6 = Else (Прочие)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/Work"
//                     }
//                 },
//                 {
//                     "name": "DisabilityType",
//                     "in": "query",
//                     "description": "Тип инвалидности\n\n0 = None (Нет инвалидности)\n\n1 = Primary (Первичная)\n\n2 = Secondary (Вторичная)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/DisabilityType"
//                     }
//                 },
//                 {
//                     "name": "DisabilityGroup",
//                     "in": "query",
//                     "description": "Группа инвалидности\n\n1 = I (I группа)\n\n2 = II (II группа)\n\n3 = III (III группа)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/DisabilityGroup"
//                     }
//                 },
//                 {
//                     "name": "DisabilityDate",
//                     "in": "query",
//                     "description": "Дата из блока инвалидности",
//                     "style": "form",
//                     "schema": {
//                         "type": "string",
//                         "format": "date"
//                     }
//                 },
//                 {
//                     "name": "WorkPlace",
//                     "in": "query",
//                     "description": "Место работы",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "WorkPosition",
//                     "in": "query",
//                     "description": "Должность",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "WorkPlaceChange",
//                     "in": "query",
//                     "description": "Изменение места работы",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 5000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "RegistrationPlaceChange",
//                     "in": "query",
//                     "description": "Изменение места регистрации",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 5000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "BloodGroup",
//                     "in": "query",
//                     "description": "Группа крови\n\n1 = O1 (O(I) - Первая)\n\n2 = A2 (A(II) - Вторая)\n\n3 = B3 (B(III) - Третья)\n\n4 = AB4 (AB(IV) - Чевёртая)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/BloodGroup"
//                     }
//                 },
//                 {
//                     "name": "RhFactor",
//                     "in": "query",
//                     "description": "Rh-фактор (Резус фактор)\n\n0 = Negative (Rh- (Отрицательный))\n\n1 = Positive (Rh+ (Положительный))",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/RhFactor"
//                     }
//                 },
//                 {
//                     "name": "AllergicReactions",
//                     "in": "query",
//                     "description": "Аллергические реакции",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 5000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "CheckupDate",
//                     "in": "query",
//                     "description": "Дата осмотра",
//                     "style": "form",
//                     "schema": {
//                         "type": "string",
//                         "format": "date"
//                     }
//                 },
//                 {
//                     "name": "CheckupLocation",
//                     "in": "query",
//                     "description": "Местоположение осмотра\n\n0 = Appointment (На приёме)\n\n1 = Home (На дому)\n\n2 = MidwiferyStation (В фельдшерско-акушерском пункте)\n\n3 = Else (Прочее)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/CheckupLocation"
//                     }
//                 },
//                 {
//                     "name": "Pediculosis",
//                     "in": "query",
//                     "description": "Педикулёз\n\n0 = No (Нет)\n\n1 = Yes (Да)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/Pediculosis"
//                     }
//                 },
//                 {
//                     "name": "Scabies",
//                     "in": "query",
//                     "description": "Чесотка\n\n0 = No (Нет)\n\n1 = Yes (Да)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/Scabies"
//                     }
//                 },
//                 {
//                     "name": "TBS",
//                     "in": "query",
//                     "description": "ТБС\n\n0 = No (Нет)\n\n1 = Yes (Да)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/TBS"
//                     }
//                 },
//                 {
//                     "name": "Hepatitis",
//                     "in": "query",
//                     "description": "Гепатит\n\n0 = No (Нет)\n\n1 = Yes (Да)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/Hepatitis"
//                     }
//                 },
//                 {
//                     "name": "VenerealDisease",
//                     "in": "query",
//                     "description": "Венерические заболевания\n\n0 = No (Нет)\n\n1 = Yes (Да)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/VenerealDisease"
//                     }
//                 },
//                 {
//                     "name": "Initials",
//                     "in": "query",
//                     "style": "form",
//                     "schema": {
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "FullName",
//                     "in": "query",
//                     "style": "form",
//                     "schema": {
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "DisabilityString",
//                     "in": "query",
//                     "style": "form",
//                     "schema": {
//                         "type": "string"
//                     }
//                 }
//             ],
//                 "responses": {
//                 "200": {
//                     "description": "Запрос успешно выполнен"
//                 },
//                 "400": {
//                     "description": "Ошибка (см. содержание)"
//                 },
//                 "401": {
//                     "description": "Ошибка аутентификации"
//                 },
//                 "404": {
//                     "description": "Попытка не найдена или уже завершена / Тест не найден или время ответа вышло / Вопрос не найден"
//                 }
//             }
//         }
//     },
//     "/Card/Edit": {
//         "post": {
//             "tags": [
//                 "Card"
//             ],
//                 "summary": "Изменяет медицинскую карту",
//                 "parameters": [
//                 {
//                     "name": "Id",
//                     "in": "query",
//                     "description": "Идентификатор строки",
//                     "style": "form",
//                     "schema": {
//                         "type": "integer",
//                         "format": "int32"
//                     }
//                 },
//                 {
//                     "name": "Deseases",
//                     "in": "query",
//                     "style": "form",
//                     "schema": {
//                         "type": "array",
//                         "items": {
//                             "$ref": "#/components/schemas/CardDeseaseEditModel"
//                         }
//                     }
//                 },
//                 {
//                     "name": "Diagnosis",
//                     "in": "query",
//                     "style": "form",
//                     "schema": {
//                         "type": "array",
//                         "items": {
//                             "$ref": "#/components/schemas/CardDiagnosisEditModel"
//                         }
//                     }
//                 },
//                 {
//                     "name": "CreateDate",
//                     "in": "query",
//                     "description": "Дата заполнения медицинской карты",
//                     "required": true,
//                     "style": "form",
//                     "schema": {
//                         "type": "string",
//                         "format": "date"
//                     }
//                 },
//                 {
//                     "name": "FirstName",
//                     "in": "query",
//                     "description": "Имя",
//                     "required": true,
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "SecondName",
//                     "in": "query",
//                     "description": "Фамилия",
//                     "required": true,
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "ThirdName",
//                     "in": "query",
//                     "description": "Отчество",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "Sex",
//                     "in": "query",
//                     "description": "Пол\n\n1 = Male (Мужчина)\n\n2 = Female (Женщина)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/Sex"
//                     }
//                 },
//                 {
//                     "name": "BirthDate",
//                     "in": "query",
//                     "description": "Дата рождения",
//                     "style": "form",
//                     "schema": {
//                         "type": "string",
//                         "format": "date"
//                     }
//                 },
//                 {
//                     "name": "Subject",
//                     "in": "query",
//                     "description": "Субъект Российской Федерации",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "District",
//                     "in": "query",
//                     "description": "Район",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "City",
//                     "in": "query",
//                     "description": "Город",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "Community",
//                     "in": "query",
//                     "description": "Населённый пункт",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "Street",
//                     "in": "query",
//                     "description": "Улица",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "House",
//                     "in": "query",
//                     "description": "Дом",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 500,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "Flat",
//                     "in": "query",
//                     "description": "Квартира",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 500,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "Phone",
//                     "in": "query",
//                     "description": "Телефон",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 100,
//                         "type": "string",
//                         "format": "tel"
//                     }
//                 },
//                 {
//                     "name": "Locality",
//                     "in": "query",
//                     "description": "Местность\n\n1 = City (Городская местность)\n\n2 = Country (Сельская местность)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/Locality"
//                     }
//                 },
//                 {
//                     "name": "CHIseries",
//                     "in": "query",
//                     "description": "Полис ОМС - Серия",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 100,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "CHInumber",
//                     "in": "query",
//                     "description": "Полис ОМС - Номер",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 100,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "SNILS",
//                     "in": "query",
//                     "description": "СНИЛС",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 100,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "InsuranceMedicalOrganization",
//                     "in": "query",
//                     "description": "Наименование страховой медицинской организации",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 100,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "BenefitCategoryCode",
//                     "in": "query",
//                     "description": "Код категории льготы",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 100,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "DocumentName",
//                     "in": "query",
//                     "description": "Документ - Название",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 100,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "DocumentSeries",
//                     "in": "query",
//                     "description": "Документ - Серия",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 100,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "DocumentNumber",
//                     "in": "query",
//                     "description": "Документ - Номер",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 100,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "Family",
//                     "in": "query",
//                     "description": "Семейное положение\n\n1 = Married (Состоит в зарегистрированном браке)\n\n2 = NotMarried (Не состоит в браке)\n\n3 = Unknown (Неизвестно [Должно быть по умолчанию])",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/Family"
//                     }
//                 },
//                 {
//                     "name": "Education",
//                     "in": "query",
//                     "description": "Образование\n\n1 = High (Высшее)\n\n2 = Secondary (Среднее)\n\n3 = GeneralSecondary (Общее: среднее)\n\n4 = Basic (Основное)\n\n5 = Elementary (Начальное)\n\n6 = Unknown (Неизвестно [Должно быть по умолчанию])",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/Education"
//                     }
//                 },
//                 {
//                     "name": "Work",
//                     "in": "query",
//                     "description": "Занятость\n\n1 = Working (Работает)\n\n2 = Military (Проходит военную службу и приравненную к ней службу)\n\n3 = Old (Пенсионер(ка))\n\n4 = Student (Студент(ка))\n\n5 = NotWorking (Не работает)\n\n6 = Else (Прочие)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/Work"
//                     }
//                 },
//                 {
//                     "name": "DisabilityType",
//                     "in": "query",
//                     "description": "Тип инвалидности\n\n0 = None (Нет инвалидности)\n\n1 = Primary (Первичная)\n\n2 = Secondary (Вторичная)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/DisabilityType"
//                     }
//                 },
//                 {
//                     "name": "DisabilityGroup",
//                     "in": "query",
//                     "description": "Группа инвалидности\n\n1 = I (I группа)\n\n2 = II (II группа)\n\n3 = III (III группа)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/DisabilityGroup"
//                     }
//                 },
//                 {
//                     "name": "DisabilityDate",
//                     "in": "query",
//                     "description": "Дата из блока инвалидности",
//                     "style": "form",
//                     "schema": {
//                         "type": "string",
//                         "format": "date"
//                     }
//                 },
//                 {
//                     "name": "WorkPlace",
//                     "in": "query",
//                     "description": "Место работы",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "WorkPosition",
//                     "in": "query",
//                     "description": "Должность",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 1000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "WorkPlaceChange",
//                     "in": "query",
//                     "description": "Изменение места работы",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 5000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "RegistrationPlaceChange",
//                     "in": "query",
//                     "description": "Изменение места регистрации",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 5000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "BloodGroup",
//                     "in": "query",
//                     "description": "Группа крови\n\n1 = O1 (O(I) - Первая)\n\n2 = A2 (A(II) - Вторая)\n\n3 = B3 (B(III) - Третья)\n\n4 = AB4 (AB(IV) - Чевёртая)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/BloodGroup"
//                     }
//                 },
//                 {
//                     "name": "RhFactor",
//                     "in": "query",
//                     "description": "Rh-фактор (Резус фактор)\n\n0 = Negative (Rh- (Отрицательный))\n\n1 = Positive (Rh+ (Положительный))",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/RhFactor"
//                     }
//                 },
//                 {
//                     "name": "AllergicReactions",
//                     "in": "query",
//                     "description": "Аллергические реакции",
//                     "style": "form",
//                     "schema": {
//                         "maxLength": 5000,
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "CheckupDate",
//                     "in": "query",
//                     "description": "Дата осмотра",
//                     "style": "form",
//                     "schema": {
//                         "type": "string",
//                         "format": "date"
//                     }
//                 },
//                 {
//                     "name": "CheckupLocation",
//                     "in": "query",
//                     "description": "Местоположение осмотра\n\n0 = Appointment (На приёме)\n\n1 = Home (На дому)\n\n2 = MidwiferyStation (В фельдшерско-акушерском пункте)\n\n3 = Else (Прочее)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/CheckupLocation"
//                     }
//                 },
//                 {
//                     "name": "Pediculosis",
//                     "in": "query",
//                     "description": "Педикулёз\n\n0 = No (Нет)\n\n1 = Yes (Да)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/Pediculosis"
//                     }
//                 },
//                 {
//                     "name": "Scabies",
//                     "in": "query",
//                     "description": "Чесотка\n\n0 = No (Нет)\n\n1 = Yes (Да)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/Scabies"
//                     }
//                 },
//                 {
//                     "name": "TBS",
//                     "in": "query",
//                     "description": "ТБС\n\n0 = No (Нет)\n\n1 = Yes (Да)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/TBS"
//                     }
//                 },
//                 {
//                     "name": "Hepatitis",
//                     "in": "query",
//                     "description": "Гепатит\n\n0 = No (Нет)\n\n1 = Yes (Да)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/Hepatitis"
//                     }
//                 },
//                 {
//                     "name": "VenerealDisease",
//                     "in": "query",
//                     "description": "Венерические заболевания\n\n0 = No (Нет)\n\n1 = Yes (Да)",
//                     "style": "form",
//                     "schema": {
//                         "$ref": "#/components/schemas/VenerealDisease"
//                     }
//                 },
//                 {
//                     "name": "Initials",
//                     "in": "query",
//                     "style": "form",
//                     "schema": {
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "FullName",
//                     "in": "query",
//                     "style": "form",
//                     "schema": {
//                         "type": "string"
//                     }
//                 },
//                 {
//                     "name": "DisabilityString",
//                     "in": "query",
//                     "style": "form",
//                     "schema": {
//                         "type": "string"
//                     }
//                 }
//             ],
//                 "responses": {
//                 "200": {
//                     "description": "Запрос успешно выполнен"
//                 },
//                 "400": {
//                     "description": "Ошибка (см. содержание)"
//                 },
//                 "401": {
//                     "description": "Ошибка аутентификации"
//                 },
//                 "404": {
//                     "description": "Карта не найдена"
//                 }
//             }
//         }
//     },
//     "/Card/Export/{id}": {
//         "post": {
//             "tags": [
//                 "Card"
//             ],
//                 "summary": "Возвращает файл",
//                 "parameters": [
//                 {
//                     "name": "id",
//                     "in": "path",
//                     "required": true,
//                     "style": "simple",
//                     "schema": {
//                         "type": "integer",
//                         "format": "int32"
//                     }
//                 }
//             ],
//                 "responses": {
//                 "200": {
//                     "description": "Success"
//                 },
//                 "206": {
//                     "description": "Отправлен ссостав файла"
//                 },
//                 "401": {
//                     "description": "Ошибка аутентификации"
//                 },
//                 "404": {
//                     "description": "Карта не найдена"
//                 }
//             }
//         }
//     },
//     "/Card/Migrate": {
//         "get": {
//             "tags": [
//                 "Card"
//             ],
//                 "responses": {
//                 "200": {
//                     "description": "Success"
//                 }
//             }
//         }
//     }
// },
//     "components": {
//     "schemas": {
//         "BloodGroup": {
//             "enum": [
//                 1,
//                 2,
//                 3,
//                 4
//             ],
//                 "type": "integer",
//                 "description": "Группа крови\n\n1 = O1 (O(I) - Первая)\n\n2 = A2 (A(II) - Вторая)\n\n3 = B3 (B(III) - Третья)\n\n4 = AB4 (AB(IV) - Чевёртая)",
//                 "format": "int32",
//                 "x-enum-varnames": [
//                 "O1",
//                 "A2",
//                 "B3",
//                 "AB4"
//             ],
//                 "x-enum-descriptions": [
//                 "O(I) - Первая",
//                 "A(II) - Вторая",
//                 "B(III) - Третья",
//                 "AB(IV) - Чевёртая"
//             ]
//         },
//         "Card": {
//             "required": [
//                 "createDate",
//                 "firstName",
//                 "secondName"
//             ],
//                 "type": "object",
//                 "properties": {
//                 "createDate": {
//                     "type": "string",
//                         "description": "Дата заполнения медицинской карты",
//                         "format": "date"
//                 },
//                 "firstName": {
//                     "maxLength": 1000,
//                         "minLength": 1,
//                         "type": "string",
//                         "description": "Имя"
//                 },
//                 "secondName": {
//                     "maxLength": 1000,
//                         "minLength": 1,
//                         "type": "string",
//                         "description": "Фамилия"
//                 },
//                 "thirdName": {
//                     "maxLength": 1000,
//                         "type": "string",
//                         "description": "Отчество",
//                         "nullable": true
//                 },
//                 "sex": {
//                     "$ref": "#/components/schemas/Sex"
//                 },
//                 "birthDate": {
//                     "type": "string",
//                         "description": "Дата рождения",
//                         "format": "date",
//                         "nullable": true
//                 },
//                 "subject": {
//                     "maxLength": 1000,
//                         "type": "string",
//                         "description": "Субъект Российской Федерации",
//                         "nullable": true
//                 },
//                 "district": {
//                     "maxLength": 1000,
//                         "type": "string",
//                         "description": "Район",
//                         "nullable": true
//                 },
//                 "city": {
//                     "maxLength": 1000,
//                         "type": "string",
//                         "description": "Город",
//                         "nullable": true
//                 },
//                 "community": {
//                     "maxLength": 1000,
//                         "type": "string",
//                         "description": "Населённый пункт",
//                         "nullable": true
//                 },
//                 "street": {
//                     "maxLength": 1000,
//                         "type": "string",
//                         "description": "Улица",
//                         "nullable": true
//                 },
//                 "house": {
//                     "maxLength": 500,
//                         "type": "string",
//                         "description": "Дом",
//                         "nullable": true
//                 },
//                 "flat": {
//                     "maxLength": 500,
//                         "type": "string",
//                         "description": "Квартира",
//                         "nullable": true
//                 },
//                 "phone": {
//                     "maxLength": 100,
//                         "type": "string",
//                         "description": "Телефон",
//                         "format": "tel",
//                         "nullable": true
//                 },
//                 "locality": {
//                     "$ref": "#/components/schemas/Locality"
//                 },
//                 "chIseries": {
//                     "maxLength": 100,
//                         "type": "string",
//                         "description": "Полис ОМС - Серия",
//                         "nullable": true
//                 },
//                 "chInumber": {
//                     "maxLength": 100,
//                         "type": "string",
//                         "description": "Полис ОМС - Номер",
//                         "nullable": true
//                 },
//                 "snils": {
//                     "maxLength": 100,
//                         "type": "string",
//                         "description": "СНИЛС",
//                         "nullable": true
//                 },
//                 "insuranceMedicalOrganization": {
//                     "maxLength": 100,
//                         "type": "string",
//                         "description": "Наименование страховой медицинской организации",
//                         "nullable": true
//                 },
//                 "benefitCategoryCode": {
//                     "maxLength": 100,
//                         "type": "string",
//                         "description": "Код категории льготы",
//                         "nullable": true
//                 },
//                 "documentName": {
//                     "maxLength": 100,
//                         "type": "string",
//                         "description": "Документ - Название",
//                         "nullable": true
//                 },
//                 "documentSeries": {
//                     "maxLength": 100,
//                         "type": "string",
//                         "description": "Документ - Серия",
//                         "nullable": true
//                 },
//                 "documentNumber": {
//                     "maxLength": 100,
//                         "type": "string",
//                         "description": "Документ - Номер",
//                         "nullable": true
//                 },
//                 "family": {
//                     "$ref": "#/components/schemas/Family"
//                 },
//                 "education": {
//                     "$ref": "#/components/schemas/Education"
//                 },
//                 "work": {
//                     "$ref": "#/components/schemas/Work"
//                 },
//                 "disabilityType": {
//                     "$ref": "#/components/schemas/DisabilityType"
//                 },
//                 "disabilityGroup": {
//                     "$ref": "#/components/schemas/DisabilityGroup"
//                 },
//                 "disabilityDate": {
//                     "type": "string",
//                         "description": "Дата из блока инвалидности",
//                         "format": "date",
//                         "nullable": true
//                 },
//                 "workPlace": {
//                     "maxLength": 1000,
//                         "type": "string",
//                         "description": "Место работы",
//                         "nullable": true
//                 },
//                 "workPosition": {
//                     "maxLength": 1000,
//                         "type": "string",
//                         "description": "Должность",
//                         "nullable": true
//                 },
//                 "workPlaceChange": {
//                     "maxLength": 5000,
//                         "type": "string",
//                         "description": "Изменение места работы",
//                         "nullable": true
//                 },
//                 "registrationPlaceChange": {
//                     "maxLength": 5000,
//                         "type": "string",
//                         "description": "Изменение места регистрации",
//                         "nullable": true
//                 },
//                 "bloodGroup": {
//                     "$ref": "#/components/schemas/BloodGroup"
//                 },
//                 "rhFactor": {
//                     "$ref": "#/components/schemas/RhFactor"
//                 },
//                 "allergicReactions": {
//                     "maxLength": 5000,
//                         "type": "string",
//                         "description": "Аллергические реакции",
//                         "nullable": true
//                 },
//                 "checkupDate": {
//                     "type": "string",
//                         "description": "Дата осмотра",
//                         "format": "date",
//                         "nullable": true
//                 },
//                 "checkupLocation": {
//                     "$ref": "#/components/schemas/CheckupLocation"
//                 },
//                 "pediculosis": {
//                     "$ref": "#/components/schemas/Pediculosis"
//                 },
//                 "scabies": {
//                     "$ref": "#/components/schemas/Scabies"
//                 },
//                 "tbs": {
//                     "$ref": "#/components/schemas/TBS"
//                 },
//                 "hepatitis": {
//                     "$ref": "#/components/schemas/Hepatitis"
//                 },
//                 "venerealDisease": {
//                     "$ref": "#/components/schemas/VenerealDisease"
//                 },
//                 "id": {
//                     "type": "integer",
//                         "format": "int32"
//                 },
//                 "deseases": {
//                     "type": "array",
//                         "items": {
//                         "$ref": "#/components/schemas/CardDesease"
//                     },
//                     "nullable": true
//                 },
//                 "diagnosis": {
//                     "type": "array",
//                         "items": {
//                         "$ref": "#/components/schemas/CardDiagnosis"
//                     },
//                     "nullable": true
//                 }
//             },
//             "additionalProperties": false
//         },
//         "CardDesease": {
//             "required": [
//                 "date"
//             ],
//                 "type": "object",
//                 "properties": {
//                 "date": {
//                     "type": "string",
//                         "description": "Дата начала диспансерного наблюдения",
//                         "format": "date"
//                 },
//                 "endDate": {
//                     "type": "string",
//                         "description": "Дата прекращения диспансерного наблюдения",
//                         "format": "date",
//                         "nullable": true
//                 },
//                 "diagnosis": {
//                     "type": "string",
//                         "description": "Диагноз",
//                         "nullable": true
//                 },
//                 "code": {
//                     "type": "string",
//                         "description": "Код по МКБ-10",
//                         "nullable": true
//                 },
//                 "doctor": {
//                     "type": "string",
//                         "description": "Врач",
//                         "nullable": true
//                 },
//                 "id": {
//                     "type": "integer",
//                         "format": "int32"
//                 }
//             },
//             "additionalProperties": false
//         },
//         "CardDeseaseCreateModel": {
//             "required": [
//                 "date"
//             ],
//                 "type": "object",
//                 "properties": {
//                 "date": {
//                     "type": "string",
//                         "description": "Дата начала диспансерного наблюдения",
//                         "format": "date"
//                 },
//                 "endDate": {
//                     "type": "string",
//                         "description": "Дата прекращения диспансерного наблюдения",
//                         "format": "date",
//                         "nullable": true
//                 },
//                 "diagnosis": {
//                     "type": "string",
//                         "description": "Диагноз",
//                         "nullable": true
//                 },
//                 "code": {
//                     "type": "string",
//                         "description": "Код по МКБ-10",
//                         "nullable": true
//                 },
//                 "doctor": {
//                     "type": "string",
//                         "description": "Врач",
//                         "nullable": true
//                 }
//             },
//             "additionalProperties": false
//         },
//         "CardDeseaseEditModel": {
//             "required": [
//                 "date"
//             ],
//                 "type": "object",
//                 "properties": {
//                 "date": {
//                     "type": "string",
//                         "description": "Дата начала диспансерного наблюдения",
//                         "format": "date"
//                 },
//                 "endDate": {
//                     "type": "string",
//                         "description": "Дата прекращения диспансерного наблюдения",
//                         "format": "date",
//                         "nullable": true
//                 },
//                 "diagnosis": {
//                     "type": "string",
//                         "description": "Диагноз",
//                         "nullable": true
//                 },
//                 "code": {
//                     "type": "string",
//                         "description": "Код по МКБ-10",
//                         "nullable": true
//                 },
//                 "doctor": {
//                     "type": "string",
//                         "description": "Врач",
//                         "nullable": true
//                 },
//                 "id": {
//                     "type": "integer",
//                         "description": "Идентификатор строки (оставить таким, каким передал сервер) (Если строка добавляется при редактировании, то указать 0)",
//                         "format": "int32"
//                 }
//             },
//             "additionalProperties": false
//         },
//         "CardDiagnosis": {
//             "required": [
//                 "date"
//             ],
//                 "type": "object",
//                 "properties": {
//                 "date": {
//                     "type": "string",
//                         "description": "Дата (число, месяц, год)",
//                         "format": "date"
//                 },
//                 "text": {
//                     "type": "string",
//                         "description": "Заключительные (уточненные) диагнозы",
//                         "nullable": true
//                 },
//                 "type": {
//                     "$ref": "#/components/schemas/DiagnosisType"
//                 },
//                 "doctor": {
//                     "type": "string",
//                         "description": "Врач",
//                         "nullable": true
//                 },
//                 "id": {
//                     "type": "integer",
//                         "format": "int32"
//                 }
//             },
//             "additionalProperties": false
//         },
//         "CardDiagnosisCreateModel": {
//             "required": [
//                 "date"
//             ],
//                 "type": "object",
//                 "properties": {
//                 "date": {
//                     "type": "string",
//                         "description": "Дата (число, месяц, год)",
//                         "format": "date"
//                 },
//                 "text": {
//                     "type": "string",
//                         "description": "Заключительные (уточненные) диагнозы",
//                         "nullable": true
//                 },
//                 "type": {
//                     "$ref": "#/components/schemas/DiagnosisType"
//                 },
//                 "doctor": {
//                     "type": "string",
//                         "description": "Врач",
//                         "nullable": true
//                 }
//             },
//             "additionalProperties": false
//         },
//         "CardDiagnosisEditModel": {
//             "required": [
//                 "date"
//             ],
//                 "type": "object",
//                 "properties": {
//                 "date": {
//                     "type": "string",
//                         "description": "Дата (число, месяц, год)",
//                         "format": "date"
//                 },
//                 "text": {
//                     "type": "string",
//                         "description": "Заключительные (уточненные) диагнозы",
//                         "nullable": true
//                 },
//                 "type": {
//                     "$ref": "#/components/schemas/DiagnosisType"
//                 },
//                 "doctor": {
//                     "type": "string",
//                         "description": "Врач",
//                         "nullable": true
//                 },
//                 "id": {
//                     "type": "integer",
//                         "description": "Идентификатор строки (оставить таким, каким передал сервер) (Если строка добавляется при редактировании, то указать 0)",
//                         "format": "int32"
//                 }
//             },
//             "additionalProperties": false
//         },
//         "CardListModel": {
//             "type": "object",
//                 "properties": {
//                 "cards": {
//                     "type": "array",
//                         "items": {
//                         "$ref": "#/components/schemas/Card"
//                     },
//                     "nullable": true
//                 },
//                 "total": {
//                     "type": "integer",
//                         "format": "int32"
//                 },
//                 "totalPages": {
//                     "type": "integer",
//                         "format": "int32"
//                 },
//                 "pageSize": {
//                     "type": "integer",
//                         "format": "int32"
//                 },
//                 "currentPage": {
//                     "type": "integer",
//                         "format": "int32"
//                 }
//             },
//             "additionalProperties": false
//         },
//         "CheckupLocation": {
//             "enum": [
//                 0,
//                 1,
//                 2,
//                 3
//             ],
//                 "type": "integer",
//                 "description": "Местоположение осмотра\n\n0 = Appointment (На приёме)\n\n1 = Home (На дому)\n\n2 = MidwiferyStation (В фельдшерско-акушерском пункте)\n\n3 = Else (Прочее)",
//                 "format": "int32",
//                 "x-enum-varnames": [
//                 "Appointment",
//                 "Home",
//                 "MidwiferyStation",
//                 "Else"
//             ],
//                 "x-enum-descriptions": [
//                 "На приёме",
//                 "На дому",
//                 "В фельдшерско-акушерском пункте",
//                 "Прочее"
//             ]
//         },
//         "DiagnosisType": {
//             "enum": [
//                 0,
//                 1
//             ],
//                 "type": "integer",
//                 "description": "Установленные впервые или повторно (+/-)\n\n0 = Minus (-)\n\n1 = Plus (+)",
//                 "format": "int32",
//                 "x-enum-varnames": [
//                 "Minus",
//                 "Plus"
//             ],
//                 "x-enum-descriptions": [
//                 "-",
//                 "+"
//             ]
//         },
//         "DisabilityGroup": {
//             "enum": [
//                 1,
//                 2,
//                 3
//             ],
//                 "type": "integer",
//                 "description": "Группа инвалидности\n\n1 = I (I группа)\n\n2 = II (II группа)\n\n3 = III (III группа)",
//                 "format": "int32",
//                 "x-enum-varnames": [
//                 "I",
//                 "II",
//                 "III"
//             ],
//                 "x-enum-descriptions": [
//                 "I группа",
//                 "II группа",
//                 "III группа"
//             ]
//         },
//         "DisabilityType": {
//             "enum": [
//                 0,
//                 1,
//                 2
//             ],
//                 "type": "integer",
//                 "description": "Тип инвалидности\n\n0 = None (Нет инвалидности)\n\n1 = Primary (Первичная)\n\n2 = Secondary (Вторичная)",
//                 "format": "int32",
//                 "x-enum-varnames": [
//                 "None",
//                 "Primary",
//                 "Secondary"
//             ],
//                 "x-enum-descriptions": [
//                 "Нет инвалидности",
//                 "Первичная",
//                 "Вторичная"
//             ]
//         },
//         "Education": {
//             "enum": [
//                 1,
//                 2,
//                 3,
//                 4,
//                 5,
//                 6
//             ],
//                 "type": "integer",
//                 "description": "Образование\n\n1 = High (Высшее)\n\n2 = Secondary (Среднее)\n\n3 = GeneralSecondary (Общее: среднее)\n\n4 = Basic (Основное)\n\n5 = Elementary (Начальное)\n\n6 = Unknown (Неизвестно [Должно быть по умолчанию])",
//                 "format": "int32",
//                 "x-enum-varnames": [
//                 "High",
//                 "Secondary",
//                 "GeneralSecondary",
//                 "Basic",
//                 "Elementary",
//                 "Unknown"
//             ],
//                 "x-enum-descriptions": [
//                 "Высшее",
//                 "Среднее",
//                 "Общее: среднее",
//                 "Основное",
//                 "Начальное",
//                 "Неизвестно [Должно быть по умолчанию]"
//             ]
//         },
//         "Family": {
//             "enum": [
//                 1,
//                 2,
//                 3
//             ],
//                 "type": "integer",
//                 "description": "Семейное положение\n\n1 = Married (Состоит в зарегистрированном браке)\n\n2 = NotMarried (Не состоит в браке)\n\n3 = Unknown (Неизвестно [Должно быть по умолчанию])",
//                 "format": "int32",
//                 "x-enum-varnames": [
//                 "Married",
//                 "NotMarried",
//                 "Unknown"
//             ],
//                 "x-enum-descriptions": [
//                 "Состоит в зарегистрированном браке",
//                 "Не состоит в браке",
//                 "Неизвестно [Должно быть по умолчанию]"
//             ]
//         },
//         "Hepatitis": {
//             "enum": [
//                 0,
//                 1
//             ],
//                 "type": "integer",
//                 "description": "Гепатит\n\n0 = No (Нет)\n\n1 = Yes (Да)",
//                 "format": "int32",
//                 "x-enum-varnames": [
//                 "No",
//                 "Yes"
//             ],
//                 "x-enum-descriptions": [
//                 "Нет",
//                 "Да"
//             ]
//         },
//         "Locality": {
//             "enum": [
//                 1,
//                 2
//             ],
//                 "type": "integer",
//                 "description": "Местность\n\n1 = City (Городская местность)\n\n2 = Country (Сельская местность)",
//                 "format": "int32",
//                 "x-enum-varnames": [
//                 "City",
//                 "Country"
//             ],
//                 "x-enum-descriptions": [
//                 "Городская местность",
//                 "Сельская местность"
//             ]
//         },
//         "Pediculosis": {
//             "enum": [
//                 0,
//                 1
//             ],
//                 "type": "integer",
//                 "description": "Педикулёз\n\n0 = No (Нет)\n\n1 = Yes (Да)",
//                 "format": "int32",
//                 "x-enum-varnames": [
//                 "No",
//                 "Yes"
//             ],
//                 "x-enum-descriptions": [
//                 "Нет",
//                 "Да"
//             ]
//         },
//         "RhFactor": {
//             "enum": [
//                 0,
//                 1
//             ],
//                 "type": "integer",
//                 "description": "Резус фактор\n\n0 = Negative (Rh- (Отрицательный))\n\n1 = Positive (Rh+ (Положительный))",
//                 "format": "int32",
//                 "x-enum-varnames": [
//                 "Negative",
//                 "Positive"
//             ],
//                 "x-enum-descriptions": [
//                 "Rh- (Отрицательный)",
//                 "Rh+ (Положительный)"
//             ]
//         },
//         "Scabies": {
//             "enum": [
//                 0,
//                 1
//             ],
//                 "type": "integer",
//                 "description": "Часотка\n\n0 = No (Нет)\n\n1 = Yes (Да)",
//                 "format": "int32",
//                 "x-enum-varnames": [
//                 "No",
//                 "Yes"
//             ],
//                 "x-enum-descriptions": [
//                 "Нет",
//                 "Да"
//             ]
//         },
//         "Sex": {
//             "enum": [
//                 1,
//                 2
//             ],
//                 "type": "integer",
//                 "description": "Пол\n\n1 = Male (Мужчина)\n\n2 = Female (Женщина)",
//                 "format": "int32",
//                 "x-enum-varnames": [
//                 "Male",
//                 "Female"
//             ],
//                 "x-enum-descriptions": [
//                 "Мужчина",
//                 "Женщина"
//             ]
//         },
//         "TBS": {
//             "enum": [
//                 0,
//                 1
//             ],
//                 "type": "integer",
//                 "description": "ТБС (хз чё это, видать тазобедренный сустав)\n\n0 = No (Нет)\n\n1 = Yes (Да)",
//                 "format": "int32",
//                 "x-enum-varnames": [
//                 "No",
//                 "Yes"
//             ],
//                 "x-enum-descriptions": [
//                 "Нет",
//                 "Да"
//             ]
//         },
//         "VenerealDisease": {
//             "enum": [
//                 0,
//                 1
//             ],
//                 "type": "integer",
//                 "description": "Венерические заболевания\n\n0 = No (Нет)\n\n1 = Yes (Да)",
//                 "format": "int32",
//                 "x-enum-varnames": [
//                 "No",
//                 "Yes"
//             ],
//                 "x-enum-descriptions": [
//                 "Нет",
//                 "Да"
//             ]
//         },
//         "Work": {
//             "enum": [
//                 1,
//                 2,
//                 3,
//                 4,
//                 5,
//                 6
//             ],
//                 "type": "integer",
//                 "description": "Занятость\n\n1 = Working (Работает)\n\n2 = Military (Проходит военную службу и приравненную к ней службу)\n\n3 = Old (Пенсионер(ка))\n\n4 = Student (Студент(ка))\n\n5 = NotWorking (Не работает)\n\n6 = Else (Прочие)",
//                 "format": "int32",
//                 "x-enum-varnames": [
//                 "Working",
//                 "Military",
//                 "Old",
//                 "Student",
//                 "NotWorking",
//                 "Else"
//             ],
//                 "x-enum-descriptions": [
//                 "Работает",
//                 "Проходит военную службу и приравненную к ней службу",
//                 "Пенсионер(ка)",
//                 "Студент(ка)",
//                 "Не работает",
//                 "Прочие"
//             ]
//         }
//     }
// }
// }