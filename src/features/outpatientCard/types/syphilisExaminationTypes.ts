export interface SyphilisExaminationCard {
  decreasedVision?: boolean
  decreasedHearing?: boolean
  decreasedMemory?: boolean
  incoordination?: boolean
  hairAllopecia?: boolean
  hairPapula?: boolean
  hairPustula?: boolean
  hairCrust?: boolean
  tongueSpots?: boolean
  tonguePapula?: boolean
  tongueErosion?: boolean
  tongueUlcers?: boolean
  tongueAngina?: boolean
  lipsPapula?: boolean
  lipsJammed?: boolean
  lipsErosion?: boolean
  voiceHoarseness?: boolean
  cervicalLymph?: boolean
  submandibularLymph?: boolean
  axillaryLymph?: boolean
  elbowLymph?: boolean
  inguinalLymph?: boolean
  boneSaddleNose?: boolean
  boneHighGothicPalate?: boolean
  boneHutchinsonTeeth?: boolean
  boneXiphoidProcess?: boolean
  boneSaberTibia?: boolean
  genitaliaSpots?: boolean
  genitaliaPapula?: boolean
  genitaliaErosion?: boolean
  genitaliaUlcers?: boolean
  doctor?: string
}

export interface SyphilisExaminationForm {
  cardId?:string,
  card:SyphilisExaminationCard[]
}
