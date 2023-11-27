const data = {
  jobs: [
    {
      id: "9b92abe6-3bf3-4cc6-8744-4de0c8af0630",
      type: "job",
      attributes: { title: "Engineering Manager" },
      relationships: {
        skills: [
          { id: "f4a6f053-2cac-44fc-a87a-5368d7ca46ed" },
          { id: "9f0a0811-4a8e-4c8a-b4ce-adc9267b1cf3" },
          { id: "e255b986-fca7-4b1c-ba4e-b16497da4477" },
        ],
      },
    },
    {
      id: "beb6dec0-52b1-4a7a-8a16-1e52e9645763",
      type: "job",
      attributes: { title: "Senior Software Engineer" },
      relationships: {
        skills: [
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "83fff505-2d56-414f-803d-18b77d4369ca" },
          { id: "7995723c-4cbc-438c-8e04-14347c97915f" },
        ],
      },
    },
    {
      id: "73efc9b5-d406-4e08-b062-ed7328b77fc5",
      type: "job",
      attributes: { title: "Fullstack Developer" },
      relationships: {
        skills: [
          { id: "9f0a0811-4a8e-4c8a-b4ce-adc9267b1cf3" },
          { id: "00cfc460-d06b-4edc-bdce-b16c437ea3eb" },
        ],
      },
    },
    {
      id: "4e83615a-a69b-4448-8641-7fdfeba887fe",
      type: "job",
      attributes: { title: "Senior Software Engineering - Integration" },
      relationships: {
        skills: [
          { id: "83fff505-2d56-414f-803d-18b77d4369ca" },
          { id: "20c476ad-01e8-4f23-bbe5-d44887f70664" },
        ],
      },
    },
    {
      id: "8dcd7671-3f16-4654-91f2-723f73615717",
      type: "job",
      attributes: { title: "Senior Software Engineer" },
      relationships: {
        skills: [
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "20c476ad-01e8-4f23-bbe5-d44887f70664" },
        ],
      },
    },
    {
      id: "e0c2d840-d97d-40a5-8273-0d4d489228ca",
      type: "job",
      attributes: { title: "Frontend Developer" },
      relationships: {
        skills: [{ id: "f4a6f053-2cac-44fc-a87a-5368d7ca46ed" }],
      },
    },
    {
      id: "7fe117ad-2220-4bbc-a413-b8761ff5d146",
      type: "job",
      attributes: { title: "Senior Engineering Manager" },
      relationships: {
        skills: [
          { id: "f4a6f053-2cac-44fc-a87a-5368d7ca46ed" },
          { id: "00cfc460-d06b-4edc-bdce-b16c437ea3eb" },
        ],
      },
    },
    {
      id: "ecd67b69-fc98-4bcd-ac77-76caab987dc5",
      type: "job",
      attributes: { title: "Senior Software Engineer" },
      relationships: {
        skills: [
          { id: "9f0a0811-4a8e-4c8a-b4ce-adc9267b1cf3" },
          { id: "00cfc460-d06b-4edc-bdce-b16c437ea3eb" },
          { id: "296d898d-1e51-4349-962a-7b8c02e15d63" },
        ],
      },
    },
    {
      id: "67bbf147-8794-4bf5-8002-9534184886fc",
      type: "job",
      attributes: { title: "Software Developer" },
      relationships: {
        skills: [
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "20c476ad-01e8-4f23-bbe5-d44887f70664" },
        ],
      },
    },
    {
      id: "42b42636-3734-4864-9349-741639433dbc",
      type: "job",
      attributes: { title: "DevOps" },
      relationships: {
        skills: [
          { id: "e255b986-fca7-4b1c-ba4e-b16497da4477" },
          { id: "aa465562-cdd4-4865-8071-30d72f4bdc19" },
          { id: "8653e66e-0e2c-4606-9931-03a3e20291bb" },
        ],
      },
    },
    {
      id: "a43c4dc8-87c6-4f43-a653-274659a6db77",
      type: "job",
      attributes: { title: "Senior Python Developer" },
      relationships: {
        skills: [
          { id: "20c476ad-01e8-4f23-bbe5-d44887f70664" },
          { id: "8653e66e-0e2c-4606-9931-03a3e20291bb" },
        ],
      },
    },
    {
      id: "3d00c71c-b3bd-4177-87ea-7267ffe8ed11",
      type: "job",
      attributes: { title: "Senior Software Engineer" },
      relationships: {
        skills: [
          { id: "9f0a0811-4a8e-4c8a-b4ce-adc9267b1cf3" },
          { id: "4f8246a0-c85e-4691-aea0-7c249c55eb11" },
        ],
      },
    },
    {
      id: "abe38b82-2924-4996-b216-51fe534678e6",
      type: "job",
      attributes: { title: "Senior Software Developer" },
      relationships: {
        skills: [
          { id: "e255b986-fca7-4b1c-ba4e-b16497da4477" },
          { id: "83fff505-2d56-414f-803d-18b77d4369ca" },
          { id: "4f8246a0-c85e-4691-aea0-7c249c55eb11" },
        ],
      },
    },
    {
      id: "6a2ea881-0773-4010-8b02-ac47f78b7584",
      type: "job",
      attributes: { title: "Senior API Engineer" },
      relationships: {
        skills: [
          { id: "e255b986-fca7-4b1c-ba4e-b16497da4477" },
          { id: "83fff505-2d56-414f-803d-18b77d4369ca" },
        ],
      },
    },
    {
      id: "7acd8a54-7a5e-4500-9cb5-e5b695ed993e",
      type: "job",
      attributes: { title: "Developer Advocate" },
      relationships: {
        skills: [{ id: "7774c642-bc0d-427f-8188-75f9ce4c4b81" }],
      },
    },
    {
      id: "76449519-d860-4f0b-9022-d5ca989e9058",
      type: "job",
      attributes: { title: "Senior Laravel Developer" },
      relationships: {
        skills: [
          { id: "fae32eb7-6e67-488d-af6d-1acef8e66532" },
          { id: "fd8b7b92-c95e-434d-ac9e-93b945e7e368" },
          { id: "3a9e2201-042e-42a8-934e-637a38124349" },
          { id: "296d898d-1e51-4349-962a-7b8c02e15d63" },
        ],
      },
    },
    {
      id: "c7edcd01-a7e7-4844-afb4-ee78abf6b55b",
      type: "job",
      attributes: { title: "Solidity Engineer" },
      relationships: {
        skills: [{ id: "af893fbf-8a30-49db-9270-42b707d162be" }],
      },
    },
    {
      id: "a03d5bc9-ae5c-4b2c-a824-a6f00643aeca",
      type: "job",
      attributes: { title: "Backend Engineer" },
      relationships: {
        skills: [
          { id: "f4a6f053-2cac-44fc-a87a-5368d7ca46ed" },
          { id: "fae32eb7-6e67-488d-af6d-1acef8e66532" },
        ],
      },
    },
    {
      id: "e586e3a2-0cab-4790-85c3-da0520d2b243",
      type: "job",
      attributes: { title: "Developer Relations" },
      relationships: {
        skills: [
          { id: "7774c642-bc0d-427f-8188-75f9ce4c4b81" },
          { id: "af893fbf-8a30-49db-9270-42b707d162be" },
        ],
      },
    },
    {
      id: "15d5b256-7d43-4f2a-891c-0d495b068473",
      type: "job",
      attributes: { title: "Senior Software Engineer" },
      relationships: {
        skills: [
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "fae32eb7-6e67-488d-af6d-1acef8e66532" },
        ],
      },
    },
    {
      id: "ddf9aea7-158d-4c91-b04b-45d537716a77",
      type: "job",
      attributes: { title: "Senior Fullstack Engineer" },
      relationships: {
        skills: [
          { id: "fae32eb7-6e67-488d-af6d-1acef8e66532" },
          { id: "fd8b7b92-c95e-434d-ac9e-93b945e7e368" },
          { id: "3a9e2201-042e-42a8-934e-637a38124349" },
        ],
      },
    },
    {
      id: "89655a94-0fc0-401e-a2b8-7d7db185b9dc",
      type: "job",
      attributes: { title: "Senior Fullstack Developer" },
      relationships: {
        skills: [
          { id: "9f0a0811-4a8e-4c8a-b4ce-adc9267b1cf3" },
          { id: "e255b986-fca7-4b1c-ba4e-b16497da4477" },
        ],
      },
    },
    {
      id: "949556a5-a4ec-4fb5-a40a-a25b561b9e94",
      type: "job",
      attributes: { title: "Backend Engineer" },
      relationships: {
        skills: [
          { id: "e255b986-fca7-4b1c-ba4e-b16497da4477" },
          { id: "83fff505-2d56-414f-803d-18b77d4369ca" },
          { id: "8653e66e-0e2c-4606-9931-03a3e20291bb" },
          { id: "7774c642-bc0d-427f-8188-75f9ce4c4b81" },
        ],
      },
    },
    {
      id: "b910ad34-ba4b-4928-af6a-d66c30572b63",
      type: "job",
      attributes: { title: "Senior Software Engineer" },
      relationships: {
        skills: [
          { id: "9f0a0811-4a8e-4c8a-b4ce-adc9267b1cf3" },
          { id: "00cfc460-d06b-4edc-bdce-b16c437ea3eb" },
          { id: "20c476ad-01e8-4f23-bbe5-d44887f70664" },
        ],
      },
    },
    {
      id: "a4097b1c-43ad-480c-8624-41dbc26414a8",
      type: "job",
      attributes: { title: "Software Engineer" },
      relationships: {
        skills: [
          { id: "9f0a0811-4a8e-4c8a-b4ce-adc9267b1cf3" },
          { id: "00cfc460-d06b-4edc-bdce-b16c437ea3eb" },
          { id: "20c476ad-01e8-4f23-bbe5-d44887f70664" },
          { id: "fd8b7b92-c95e-434d-ac9e-93b945e7e368" },
        ],
      },
    },
    {
      id: "b5f81d13-b237-46e2-aa63-9f2a2c189c3c",
      type: "job",
      attributes: { title: "Senior Frontend Engineer" },
      relationships: {
        skills: [
          { id: "9f0a0811-4a8e-4c8a-b4ce-adc9267b1cf3" },
          { id: "00cfc460-d06b-4edc-bdce-b16c437ea3eb" },
          { id: "296d898d-1e51-4349-962a-7b8c02e15d63" },
        ],
      },
    },
    {
      id: "b9b1a84f-dc86-4b67-9b21-c353107f394e",
      type: "job",
      attributes: { title: "Senior Node.js Developer" },
      relationships: {
        skills: [
          { id: "f4a6f053-2cac-44fc-a87a-5368d7ca46ed" },
          { id: "e255b986-fca7-4b1c-ba4e-b16497da4477" },
          { id: "7774c642-bc0d-427f-8188-75f9ce4c4b81" },
        ],
      },
    },
    {
      id: "f3327b38-731b-46be-a552-997bae48fc0e",
      type: "job",
      attributes: { title: "Senior Frontend Developer" },
      relationships: {
        skills: [
          { id: "9f0a0811-4a8e-4c8a-b4ce-adc9267b1cf3" },
          { id: "7995723c-4cbc-438c-8e04-14347c97915f" },
        ],
      },
    },
    {
      id: "c0c50503-38ba-4aa1-af97-cfee5d231670",
      type: "job",
      attributes: { title: "Fullstack Developer" },
      relationships: {
        skills: [
          { id: "f4a6f053-2cac-44fc-a87a-5368d7ca46ed" },
          { id: "9f0a0811-4a8e-4c8a-b4ce-adc9267b1cf3" },
          { id: "e255b986-fca7-4b1c-ba4e-b16497da4477" },
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
        ],
      },
    },
    {
      id: "c7807aaf-444c-4f2a-91d2-573d4db7e5f0",
      type: "job",
      attributes: { title: "Senior Frontend Engineer" },
      relationships: {
        skills: [
          { id: "f4a6f053-2cac-44fc-a87a-5368d7ca46ed" },
          { id: "9f0a0811-4a8e-4c8a-b4ce-adc9267b1cf3" },
        ],
      },
    },
    {
      id: "8b1eb666-0f8e-4030-99f8-2e3401a2070d",
      type: "job",
      attributes: { title: "Principal Software Architect" },
      relationships: {
        skills: [
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "aa465562-cdd4-4865-8071-30d72f4bdc19" },
        ],
      },
    },
    {
      id: "3008f954-5dbe-42bb-af70-5e98eac8bebd",
      type: "job",
      attributes: { title: "Senior Frontend Developer" },
      relationships: {
        skills: [
          { id: "9f0a0811-4a8e-4c8a-b4ce-adc9267b1cf3" },
          { id: "7995723c-4cbc-438c-8e04-14347c97915f" },
          { id: "4f8246a0-c85e-4691-aea0-7c249c55eb11" },
        ],
      },
    },
  ],
  skills: [
    {
      id: "f4a6f053-2cac-44fc-a87a-5368d7ca46ed",
      type: "skill",
      attributes: {
        name: "JavaScript",
        type: "Knowledge",
        importance: "3.7",
        level: "2.3",
      },
      relationships: {
        jobs: [
          { id: "9b92abe6-3bf3-4cc6-8744-4de0c8af0630" },
          { id: "e0c2d840-d97d-40a5-8273-0d4d489228ca" },
          { id: "7fe117ad-2220-4bbc-a413-b8761ff5d146" },
          { id: "a03d5bc9-ae5c-4b2c-a824-a6f00643aeca" },
          { id: "b9b1a84f-dc86-4b67-9b21-c353107f394e" },
          { id: "c0c50503-38ba-4aa1-af97-cfee5d231670" },
          { id: "c7807aaf-444c-4f2a-91d2-573d4db7e5f0" },
        ],
        skills: [
          { id: "9f0a0811-4a8e-4c8a-b4ce-adc9267b1cf3" },
          { id: "e255b986-fca7-4b1c-ba4e-b16497da4477" },
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "83fff505-2d56-414f-803d-18b77d4369ca" },
          { id: "7995723c-4cbc-438c-8e04-14347c97915f" },
          { id: "4f8246a0-c85e-4691-aea0-7c249c55eb11" },
        ],
      },
    },
    {
      id: "9f0a0811-4a8e-4c8a-b4ce-adc9267b1cf3",
      type: "skill",
      attributes: {
        name: "React",
        type: "Knowledge",
        importance: "3.7",
        level: "2.3",
      },
      relationships: {
        jobs: [
          { id: "9b92abe6-3bf3-4cc6-8744-4de0c8af0630" },
          { id: "73efc9b5-d406-4e08-b062-ed7328b77fc5" },
          { id: "ecd67b69-fc98-4bcd-ac77-76caab987dc5" },
          { id: "3d00c71c-b3bd-4177-87ea-7267ffe8ed11" },
          { id: "89655a94-0fc0-401e-a2b8-7d7db185b9dc" },
          { id: "b910ad34-ba4b-4928-af6a-d66c30572b63" },
          { id: "a4097b1c-43ad-480c-8624-41dbc26414a8" },
          { id: "b5f81d13-b237-46e2-aa63-9f2a2c189c3c" },
          { id: "f3327b38-731b-46be-a552-997bae48fc0e" },
          { id: "c0c50503-38ba-4aa1-af97-cfee5d231670" },
          { id: "c7807aaf-444c-4f2a-91d2-573d4db7e5f0" },
          { id: "3008f954-5dbe-42bb-af70-5e98eac8bebd" },
        ],
        skills: [
          { id: "f4a6f053-2cac-44fc-a87a-5368d7ca46ed" },
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "7995723c-4cbc-438c-8e04-14347c97915f" },
        ],
      },
    },
    {
      id: "e255b986-fca7-4b1c-ba4e-b16497da4477",
      type: "skill",
      attributes: {
        name: "Node.js",
        type: "Knowledge",
        importance: "3.7",
        level: "2.3",
      },
      relationships: {
        jobs: [
          { id: "9b92abe6-3bf3-4cc6-8744-4de0c8af0630" },
          { id: "42b42636-3734-4864-9349-741639433dbc" },
          { id: "abe38b82-2924-4996-b216-51fe534678e6" },
          { id: "6a2ea881-0773-4010-8b02-ac47f78b7584" },
          { id: "89655a94-0fc0-401e-a2b8-7d7db185b9dc" },
          { id: "949556a5-a4ec-4fb5-a40a-a25b561b9e94" },
          { id: "b9b1a84f-dc86-4b67-9b21-c353107f394e" },
          { id: "c0c50503-38ba-4aa1-af97-cfee5d231670" },
        ],
        skills: [
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "83fff505-2d56-414f-803d-18b77d4369ca" },
        ],
      },
    },
    {
      id: "d20c1ceb-3a9a-485b-9722-62fc527b458e",
      type: "skill",
      attributes: {
        name: "Fullstack",
        type: "Knowledge",
        importance: "3.7",
        level: "2.3",
      },
      relationships: {
        jobs: [
          { id: "beb6dec0-52b1-4a7a-8a16-1e52e9645763" },
          { id: "8dcd7671-3f16-4654-91f2-723f73615717" },
          { id: "67bbf147-8794-4bf5-8002-9534184886fc" },
          { id: "15d5b256-7d43-4f2a-891c-0d495b068473" },
          { id: "c0c50503-38ba-4aa1-af97-cfee5d231670" },
          { id: "8b1eb666-0f8e-4030-99f8-2e3401a2070d" },
        ],
        skills: [
          { id: "f4a6f053-2cac-44fc-a87a-5368d7ca46ed" },
          { id: "9f0a0811-4a8e-4c8a-b4ce-adc9267b1cf3" },
          { id: "e255b986-fca7-4b1c-ba4e-b16497da4477" },
          { id: "83fff505-2d56-414f-803d-18b77d4369ca" },
          { id: "7995723c-4cbc-438c-8e04-14347c97915f" },
        ],
      },
    },
    {
      id: "83fff505-2d56-414f-803d-18b77d4369ca",
      type: "skill",
      attributes: {
        name: "Backend",
        type: "Knowledge",
        importance: "3.7",
        level: "2.3",
      },
      relationships: {
        jobs: [
          { id: "beb6dec0-52b1-4a7a-8a16-1e52e9645763" },
          { id: "4e83615a-a69b-4448-8641-7fdfeba887fe" },
          { id: "abe38b82-2924-4996-b216-51fe534678e6" },
          { id: "6a2ea881-0773-4010-8b02-ac47f78b7584" },
          { id: "949556a5-a4ec-4fb5-a40a-a25b561b9e94" },
        ],
        skills: [
          { id: "e255b986-fca7-4b1c-ba4e-b16497da4477" },
          { id: "00cfc460-d06b-4edc-bdce-b16c437ea3eb" },
          { id: "20c476ad-01e8-4f23-bbe5-d44887f70664" },
          { id: "aa465562-cdd4-4865-8071-30d72f4bdc19" },
          { id: "8653e66e-0e2c-4606-9931-03a3e20291bb" },
          { id: "7774c642-bc0d-427f-8188-75f9ce4c4b81" },
          { id: "fae32eb7-6e67-488d-af6d-1acef8e66532" },
          { id: "fd8b7b92-c95e-434d-ac9e-93b945e7e368" },
          { id: "3a9e2201-042e-42a8-934e-637a38124349" },
        ],
      },
    },
    {
      id: "7995723c-4cbc-438c-8e04-14347c97915f",
      type: "skill",
      attributes: {
        name: "Frontend",
        type: "Knowledge",
        importance: "3.7",
        level: "2.3",
      },
      relationships: {
        jobs: [
          { id: "beb6dec0-52b1-4a7a-8a16-1e52e9645763" },
          { id: "f3327b38-731b-46be-a552-997bae48fc0e" },
          { id: "3008f954-5dbe-42bb-af70-5e98eac8bebd" },
        ],
        skills: [
          { id: "f4a6f053-2cac-44fc-a87a-5368d7ca46ed" },
          { id: "9f0a0811-4a8e-4c8a-b4ce-adc9267b1cf3" },
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "4f8246a0-c85e-4691-aea0-7c249c55eb11" },
          { id: "296d898d-1e51-4349-962a-7b8c02e15d63" },
        ],
      },
    },
    {
      id: "00cfc460-d06b-4edc-bdce-b16c437ea3eb",
      type: "skill",
      attributes: {
        name: "Ruby on Rails",
        type: "Knowledge",
        importance: "3.7",
        level: "2.3",
      },
      relationships: {
        jobs: [
          { id: "73efc9b5-d406-4e08-b062-ed7328b77fc5" },
          { id: "7fe117ad-2220-4bbc-a413-b8761ff5d146" },
          { id: "ecd67b69-fc98-4bcd-ac77-76caab987dc5" },
          { id: "b910ad34-ba4b-4928-af6a-d66c30572b63" },
          { id: "a4097b1c-43ad-480c-8624-41dbc26414a8" },
          { id: "b5f81d13-b237-46e2-aa63-9f2a2c189c3c" },
        ],
        skills: [
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "83fff505-2d56-414f-803d-18b77d4369ca" },
          { id: "7774c642-bc0d-427f-8188-75f9ce4c4b81" },
          { id: "fd8b7b92-c95e-434d-ac9e-93b945e7e368" },
        ],
      },
    },
    {
      id: "20c476ad-01e8-4f23-bbe5-d44887f70664",
      type: "skill",
      attributes: {
        name: "Python",
        type: "Knowledge",
        importance: "3.7",
        level: "2.3",
      },
      relationships: {
        jobs: [
          { id: "4e83615a-a69b-4448-8641-7fdfeba887fe" },
          { id: "8dcd7671-3f16-4654-91f2-723f73615717" },
          { id: "67bbf147-8794-4bf5-8002-9534184886fc" },
          { id: "a43c4dc8-87c6-4f43-a653-274659a6db77" },
          { id: "b910ad34-ba4b-4928-af6a-d66c30572b63" },
          { id: "a4097b1c-43ad-480c-8624-41dbc26414a8" },
        ],
        skills: [
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "83fff505-2d56-414f-803d-18b77d4369ca" },
          { id: "7774c642-bc0d-427f-8188-75f9ce4c4b81" },
          { id: "fd8b7b92-c95e-434d-ac9e-93b945e7e368" },
        ],
      },
    },
    {
      id: "aa465562-cdd4-4865-8071-30d72f4bdc19",
      type: "skill",
      attributes: {
        name: "Linux",
        type: "Knowledge",
        importance: "3.7",
        level: "2.3",
      },
      relationships: {
        jobs: [
          { id: "42b42636-3734-4864-9349-741639433dbc" },
          { id: "8b1eb666-0f8e-4030-99f8-2e3401a2070d" },
        ],
        skills: [
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "83fff505-2d56-414f-803d-18b77d4369ca" },
          { id: "8653e66e-0e2c-4606-9931-03a3e20291bb" },
          { id: "7774c642-bc0d-427f-8188-75f9ce4c4b81" },
        ],
      },
    },
    {
      id: "8653e66e-0e2c-4606-9931-03a3e20291bb",
      type: "skill",
      attributes: {
        name: "Docker",
        type: "Knowledge",
        importance: "3.7",
        level: "2.3",
      },
      relationships: {
        jobs: [
          { id: "42b42636-3734-4864-9349-741639433dbc" },
          { id: "a43c4dc8-87c6-4f43-a653-274659a6db77" },
          { id: "949556a5-a4ec-4fb5-a40a-a25b561b9e94" },
        ],
        skills: [
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "83fff505-2d56-414f-803d-18b77d4369ca" },
          { id: "aa465562-cdd4-4865-8071-30d72f4bdc19" },
          { id: "7774c642-bc0d-427f-8188-75f9ce4c4b81" },
        ],
      },
    },
    {
      id: "4f8246a0-c85e-4691-aea0-7c249c55eb11",
      type: "skill",
      attributes: {
        name: "TypeScript",
        type: "Knowledge",
        importance: "3.7",
        level: "2.3",
      },
      relationships: {
        jobs: [
          { id: "3d00c71c-b3bd-4177-87ea-7267ffe8ed11" },
          { id: "abe38b82-2924-4996-b216-51fe534678e6" },
          { id: "3008f954-5dbe-42bb-af70-5e98eac8bebd" },
        ],
        skills: [
          { id: "f4a6f053-2cac-44fc-a87a-5368d7ca46ed" },
          { id: "9f0a0811-4a8e-4c8a-b4ce-adc9267b1cf3" },
          { id: "e255b986-fca7-4b1c-ba4e-b16497da4477" },
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "83fff505-2d56-414f-803d-18b77d4369ca" },
          { id: "7995723c-4cbc-438c-8e04-14347c97915f" },
        ],
      },
    },
    {
      id: "7774c642-bc0d-427f-8188-75f9ce4c4b81",
      type: "skill",
      attributes: {
        name: "Databases",
        type: "Knowledge",
        importance: "3.7",
        level: "2.3",
      },
      relationships: {
        jobs: [
          { id: "7acd8a54-7a5e-4500-9cb5-e5b695ed993e" },
          { id: "e586e3a2-0cab-4790-85c3-da0520d2b243" },
          { id: "949556a5-a4ec-4fb5-a40a-a25b561b9e94" },
          { id: "b9b1a84f-dc86-4b67-9b21-c353107f394e" },
        ],
        skills: [
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "83fff505-2d56-414f-803d-18b77d4369ca" },
          { id: "8653e66e-0e2c-4606-9931-03a3e20291bb" },
          { id: "fd8b7b92-c95e-434d-ac9e-93b945e7e368" },
        ],
      },
    },
    {
      id: "fae32eb7-6e67-488d-af6d-1acef8e66532",
      type: "skill",
      attributes: {
        name: "PHP",
        type: "Knowledge",
        importance: "3.7",
        level: "2.3",
      },
      relationships: {
        jobs: [
          { id: "76449519-d860-4f0b-9022-d5ca989e9058" },
          { id: "a03d5bc9-ae5c-4b2c-a824-a6f00643aeca" },
          { id: "15d5b256-7d43-4f2a-891c-0d495b068473" },
          { id: "ddf9aea7-158d-4c91-b04b-45d537716a77" },
        ],
        skills: [
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "83fff505-2d56-414f-803d-18b77d4369ca" },
          { id: "fd8b7b92-c95e-434d-ac9e-93b945e7e368" },
          { id: "3a9e2201-042e-42a8-934e-637a38124349" },
        ],
      },
    },
    {
      id: "fd8b7b92-c95e-434d-ac9e-93b945e7e368",
      type: "skill",
      attributes: {
        name: "MySQL",
        type: "Knowledge",
        importance: "3.7",
        level: "2.3",
      },
      relationships: {
        jobs: [
          { id: "76449519-d860-4f0b-9022-d5ca989e9058" },
          { id: "ddf9aea7-158d-4c91-b04b-45d537716a77" },
          { id: "a4097b1c-43ad-480c-8624-41dbc26414a8" },
        ],
        skills: [
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "83fff505-2d56-414f-803d-18b77d4369ca" },
          { id: "8653e66e-0e2c-4606-9931-03a3e20291bb" },
          { id: "7774c642-bc0d-427f-8188-75f9ce4c4b81" },
        ],
      },
    },
    {
      id: "af893fbf-8a30-49db-9270-42b707d162be",
      type: "skill",
      attributes: {
        name: "Blockchain",
        type: "Knowledge",
        importance: "3.7",
        level: "2.3",
      },
      relationships: {
        jobs: [
          { id: "c7edcd01-a7e7-4844-afb4-ee78abf6b55b" },
          { id: "e586e3a2-0cab-4790-85c3-da0520d2b243" },
        ],
        skills: [
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "83fff505-2d56-414f-803d-18b77d4369ca" },
          { id: "7995723c-4cbc-438c-8e04-14347c97915f" },
        ],
      },
    },
    {
      id: "3a9e2201-042e-42a8-934e-637a38124349",
      type: "skill",
      attributes: {
        name: "Laravel",
        type: "Knowledge",
        importance: "3.7",
        level: "2.3",
      },
      relationships: {
        jobs: [
          { id: "76449519-d860-4f0b-9022-d5ca989e9058" },
          { id: "ddf9aea7-158d-4c91-b04b-45d537716a77" },
        ],
        skills: [
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "83fff505-2d56-414f-803d-18b77d4369ca" },
          { id: "fae32eb7-6e67-488d-af6d-1acef8e66532" },
        ],
      },
    },
    {
      id: "296d898d-1e51-4349-962a-7b8c02e15d63",
      type: "skill",
      attributes: {
        name: "Sass",
        type: "Knowledge",
        importance: "3.7",
        level: "2.3",
      },
      relationships: {
        jobs: [
          { id: "ecd67b69-fc98-4bcd-ac77-76caab987dc5" },
          { id: "76449519-d860-4f0b-9022-d5ca989e9058" },
          { id: "b5f81d13-b237-46e2-aa63-9f2a2c189c3c" },
        ],
        skills: [
          { id: "d20c1ceb-3a9a-485b-9722-62fc527b458e" },
          { id: "7995723c-4cbc-438c-8e04-14347c97915f" },
        ],
      },
    },
  ],
};

const talents = [
  {
    type: "talent",
    id: "1a2b3c4d",
    attributes: {
      lastName: "Smith",
      firstName: "John",
      email: "john.smith@example.com",
      jobTitle: "Software Engineer",
      joinedAt: "2023-01-01",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "Experienced software engineer passionate about creating innovative solutions.",
    },
  },
  {
    type: "talent",
    id: "5e6f7g8h",
    attributes: {
      lastName: "Johnson",
      firstName: "Emily",
      email: "emily.johnson@example.com",
      jobTitle: "Graphic Designer",
      joinedAt: "2023-02-15",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      bio: "Creative graphic designer with a keen eye for detail and aesthetics.",
    },
  },
  {
    type: "talent",
    id: "9i8h7g6f",
    attributes: {
      lastName: "Davis",
      firstName: "Michael",
      email: "michael.davis@example.com",
      jobTitle: "Marketing Specialist",
      joinedAt: "2023-11-20",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      bio: "Results-driven marketing specialist with a focus on digital strategies.",
    },
  },
  {
    type: "talent",
    id: "3c2b1a4d",
    attributes: {
      lastName: "Miller",
      firstName: "Sophia",
      email: "sophia.miller@example.com",
      jobTitle: "UX/UI Designer",
      joinedAt: "2023-03-10",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      bio: "Passionate UX/UI designer creating seamless and enjoyable user experiences.",
    },
  },
  {
    type: "talent",
    id: "8h7g6f5e",
    attributes: {
      lastName: "Brown",
      firstName: "Christopher",
      email: "christopher.brown@example.com",
      jobTitle: "Data Scientist",
      joinedAt: "2023-05-05",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      bio: "Data scientist with a love for uncovering insights and making data-driven decisions.",
    },
  },
  {
    type: "talent",
    id: "4d3c2b1a",
    attributes: {
      lastName: "Garcia",
      firstName: "Olivia",
      email: "olivia.garcia@example.com",
      jobTitle: "Social Media Manager",
      joinedAt: "2023-09-18",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      bio: "Social media enthusiast managing engaging content and fostering online communities.",
    },
  },
  {
    type: "talent",
    id: "1a2b3c4k",
    attributes: {
      lastName: "Lee",
      firstName: "Ethan",
      email: "ethan.lee@example.com",
      jobTitle: "Product Manager",
      joinedAt: "2023-10-30",
      image: "https://randomuser.me/api/portraits/men/49.jpg",
      bio: "Strategic product manager driving innovation and delivering exceptional products.",
    },
  },
  {
    type: "talent",
    id: "1a2b3c8d",
    attributes: {
      lastName: "Smith",
      firstName: "John",
      email: "john.smith@example.com",
      jobTitle: "Software Engineer",
      joinedAt: "2023-10-04",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      bio: "John Smith is a software engineer with 5 years of experience. He is proficient in Java, Python, and JavaScript. He is also experienced in DevOps and cloud computing.",
    },
  },
  {
    type: "talent",
    id: "1a2873c8d",
    attributes: {
      lastName: "Johnson",
      firstName: "Jane",
      email: "jane.johnson@example.com",
      jobTitle: "Product Manager",
      joinedAt: "2022-01-01",
      image: "https://randomuser.me/api/portraits/women/20.jpg",
      bio: "Jane Johnson is a product manager with 10 years of experience. She is responsible for the development and launch of new products. She is also skilled in user experience (UX) design and market research.",
    },
  },
  {
    type: "talent",
    id: "1a2jnc8d",
    attributes: {
      lastName: "Williams",
      firstName: "David",
      email: "david.williams@example.com",
      jobTitle: "UX Designer",
      joinedAt: "2021-03-15",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      bio: "David Williams is a UX designer with 7 years of experience. He is responsible for creating user-centered designs that are easy to use and visually appealing. He is also skilled in user research and prototyping.",
    },
  },
  {
    type: "talent",
    id: "1a2b3k8d",
    attributes: {
      lastName: "Brown",
      firstName: "Mary",
      email: "mary.brown@example.com",
      jobTitle: "Marketing Manager",
      joinedAt: "2020-06-20",
      image: "https://randomuser.me/api/portraits/men/23.jpg",
      bio: "Mary Brown is a marketing manager with 8 years of experience. She is responsible for developing and executing marketing campaigns. She is also skilled in social media marketing and content creation.",
    },
  },
  {
    id: "1a893c8d",
    type: "talent",
    attributes: {
      lastName: "Jones",
      firstName: "Michael",
      email: "michael.jones@example.com",
      jobTitle: "Sales Manager",
      joinedAt: "2019-09-25",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
      bio: "Michael Jones is a sales manager with 9 years of experience. He is responsible for leading a team of salespeople to achieve sales goals. He is also skilled in negotiation and closing deals.",
    },
  },
  {
    id: "1a9h3c8d",
    type: "talent",
    attributes: {
      lastName: "Miller",
      firstName: "Patricia",
      email: "patricia.miller@example.com",
      jobTitle: "Accountant",
      joinedAt: "2018-12-10",
      image: "https://randomuser.me/api/portraits/men/98.jpg",
      bio: "Patricia Miller is an accountant with 6 years of experience. She is responsible for preparing financial statements and managing financial records. She is also skilled in tax accounting and financial analysis.",
    },
  },
  {
    id: "9j2b3c8d",
    type: "talent",
    attributes: {
      lastName: "Davis",
      firstName: "Steven",
      email: "steven.davis@example.com",
      jobTitle: "Human Resources Manager",
      joinedAt: "2017-03-17",
      image: "https://randomuser.me/api/portraits/women/24.jpg",
      bio: "Steven Davis is a human resources manager with 11 years of experience. He is responsible for overseeing all aspects of human resources, including recruitment, onboarding, and employee relations. He is also skilled in conflict resolution and performance management.",
    },
  },
  {
    id: "kj2b3c8d",
    type: "talent",
    attributes: {
      lastName: "Lopez",
      firstName: "Maria",
      email: "maria.lopez@example.com",
      jobTitle: "Customer Service Manager",
      joinedAt: "2016-06-22",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
    },
  },
];

module.exports = { data, talents };
