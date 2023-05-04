import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/PrimaryLanguageCredential/1-0-0.json",

  title: "Primary Language Preference Credential",
  description: "Self-attested credential to your preferred primary language",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "language"],
      properties: {
        id: { title: "Recipient DID", type: "string" },
        language: {
          type: "string",
          title: "Language",
          enum: [
            "Afrikaans",
            "Albanian",
            "Aragonese",
            "Arabic",
            "Armenian",
            "Assamese",
            "Asturian",
            "Azerbaijani",
            "Basque",
            "Belarusian",
            "Bengali",
            "Bosnian",
            "Breton",
            "Bulgarian",
            "Burmese",
            "Catalan",
            "Chamorro",
            "Chechen",
            "Chinese",
            "Chinese (Cantonese)",
            "Chinese (Mandarin)",
            "Chuvash",
            "Corsican",
            "Cree",
            "Croatian",
            "Czech",
            "Danish",
            "Dutch",
            "English",
            "Esperanto",
            "Estonian",
            "Faeroese",
            "Farsi",
            "Fijian",
            "Finnish",
            "French",
            "Frisian",
            "Friulian",
            "Gaelic",
            "Galacian",
            "Georgian",
            "German",
            "Greek",
            "Gujurati",
            "Haitian",
            "Hebrew",
            "Hindi",
            "Hungarian",
            "Icelandic",
            "Indonesian",
            "Inuktitut",
            "Irish",
            "Italian",
            "Japanese",
            "Kannada",
            "Kashmiri",
            "Kazakh",
            "Khmer",
            "Kirghiz",
            "Klingon",
            "Korean",
            "Latin",
            "Latvian",
            "Lithuanian",
            "Luxembourgish",
            "FYRO Macedonian",
            "Malay",
            "Malayalam",
            "Maltese",
            "Maori",
            "Marathi",
            "Moldavian",
            "Navajo",
            "Ndonga",
            "Nepali",
            "Norwegian",
            "Occitan",
            "Oriya",
            "Oromo",
            "Persian",
            "Polish",
            "Portuguese",
            "Punjabi",
            "Quechua",
            "Rhaeto-Romanic",
            "Romanian",
            "Russian",
            "Sami (Lappish)",
            "Sango",
            "Sanskrit",
            "Sardinian",
            "Scots Gaelic",
            "Sindhi",
            "Singhalese",
            "Serbian",
            "Slovak",
            "Slovenian",
            "Somani",
            "Sorbian",
            "Spanish",
            "Sutu",
            "Swahili",
            "Swedish",
            "Tamil",
            "Tatar",
            "Teluga",
            "Thai",
            "Tigre",
            "Tsonga",
            "Tswana",
            "Turkish",
            "Turkmen",
            "Ukrainian",
            "Upper Sorbian",
            "Urdu",
            "Venda",
            "Vietnamese",
            "Volapuk",
            "Walloon",
            "Welsh",
            "Xhosa",
            "Yiddish",
            "Zulu",
          ],
        },
      },
    },
  },
} as JSONSchema7;
