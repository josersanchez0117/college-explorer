const data = [
    "Anthropology, BA", "Architectural Studies", "Art History, BA", "Astronomy and Astrophysics, BA, BS", "Big Problems", "Biological Chemistry, BS, MS", "Biological Sciences, BA, BS↵Specializations availa…ices↵Immunology↵Microbiology↵Quantitative Biology", "Business", "Chemistry, BA, BS, BS/MS", "Chicago Studies", "Cinema and Media Studies, BA", "Classical Studies, BA↵Program variants include:↵La…ature↵Language Intensive↵Greek and Roman Cultures", "Clinical and Translational Science", "Comparative Human Development, BA", "Comparative Literature, BA", "Comparative Race and Ethnic Studies, BA↵Specializa…es↵Asian American Studies↵Native American Studies", "Computational and Applied Mathematics, BS", "Computational Analysis and Public Policy, BA/MS", "Computational Neuroscience", "Computational Social Science, BA/MA", "Computer Science, BA, BS, BA/MS, BS/MS", "Creative Writing, BA", "Data Science", "Digital Studies of Language, Culture, and History, BA/MA", "East Asian Languages and Civilizations, BA↵Areas of study include:↵Chinese↵Japanese↵Korean", "Economics, BA↵Specializations available in:↵Business Economics↵Data Science", "Education Professions", "Education and Teaching Certification, BA/MAT", "Education and Society", "English and Creative Writing", "English Language and Literature, BA", "Entrepreneurship", "Environmental Science, BS", "Environmental and Urban Studies, BA", "Fundamentals: Issues and Texts, BA", "Gender and Sexuality Studies, BA", "Geographical Sciences, BA", "Geographic Information Science", "Geophysical Sciences, BA, BS", "Germanic Studies, BA↵Areas of study include:↵German↵Norwegian↵Yiddish", "Global Studies, BA", "Health Professions", "Health and Society", "History, BA", "History, Philosophy, and Social Studies of Science and Medicine↵(HIPS), BA", "Humanities, BA/MA", "Human Rights", "Inequality, Social Problems, and Change", "Interdisciplinary Studies in the Humanities, BA", "International Relations, BA/MA", "Jewish Studies, BA", "Journalism, Arts, and Media", "Latin American and Caribbean Studies", "Law", "Law, Letters, and Society, BA", "Linguistics, BA↵Areas of study include:↵American S…que↵Languages in Linguistics↵Modern Greek↵Swahili", "Mathematics, BA, BS, BA/MS, BS/MS", "Media Arts and Design", "Medieval Studies, BA", "Middle Eastern Studies, BA/MA", "Molecular Engineering, BS↵Areas of study include:↵Biology↵Chemical and Soft Materials↵Quantum", "Molecular Engineering Technology and Innovation", "Music, BA", "Near Eastern Languages and Civilizations, BA↵Speci…uages and Literatures↵Turkish and Ottoman Studies", "Neuroscience, BA, BS", "Norwegian Studies", "Philosophy, BA↵Variants include:↵Philosophy and Allied Fields", "Physics, BA", "Political Science, BA", "Psychology, BA", "Public Policy and Service", "Public Policy Studies, BA, BA/MPP", "Religious Studies, BA", "Romance Languages and Literatures, BA↵Areas of stu…nd Francophone Studies↵Italian↵Portuguese↵Spanish", "Russian and East European Studies, BA↵Areas of stu…de:↵Bosnian/Croatian/Serbian↵Czech↵Polish↵Russian", "Science, Technology, Engineering, and Math", "Social Sciences, BA/MA", "Social Service Administration, BA/MA", "Sociology, BA", "South Asian Languages and Civilizations, BA↵Areas …m↵Marathi↵Pali↵Sanskrit↵Tamil↵Telugu↵Tibetan↵Urdu", "Statistics, BA, BS, BA/MS, BS/MS", "Theater and Performance Studies, BA", "Tutorial Studies, BA", "Visual Arts, BA", "Biochemistry and Molecular Biophysics", "Biophysical Sciences", "Cancer Biology", "Cell and Molecular Biology", "Computational Neuroscience", "Development, Regeneration and Stem Cell Biology", "Doctor of Philosophy in Public Health Sciences", "Ecology and Evolution", "Evolutionary Biology", "Genetics, Genomics and Systems Biology", "Human Genetics", "Immunology", "Integrative Biology", "Interdisciplinary Scientist Training Program - MD/PhD", "Master of Science in Public Health Sciences for Clinical Professionals", "Medical Physics"
]
const e = {
    100: "Microbiology",
101: "Molecular Metabolism and Nutrition",
102: "Neurobiology",
103: "Accounting",
104: "Behavioral Science",
105: "Econometrics and Statistics",
106: "Doctoral Program in Business",
107: "Economics",
108: "Finance",
109: "Management Science/Operations Management",
110: "Marketing",
111: "Joint PhD in Psychology and Business",
112: "Joint PhD in Financial Economics",
113: "Full-time MBA",
114: "Evening MBA",
115: "Executive MBA",
116: "Weekend MBA",
117: "Doctoral Program in Religion",
118: "Master of Arts in Divinity",
119: "Master of Arts in Religious Studies",
120: "Master of Divinity",
121: "Master of Arts in Teaching",
122: "Liberal Arts",
123: "Analytics",
124: "Biomedical Informatics",
125: "Threat and Response Management",
126: "Continuing Education",
127: "Graduate Student-at-Large",
128: "Graduate Student-at-Large: Business",
129: "Graduate Student-at-Large: Returning Scholar",
130: "Postgraduate Certificate in Medical Physics",
131: "Certificate in Municipal Finance",
132: "PhD Program in Public Policy",
133: "Graduate Program in Health Administration and Policy (GPHAP)",
134: "Public Policy with Certificate in Research Methods",
135: "Master of Arts in Public Policy",
136: "Public Policy and International Relations",
137: "Master of Public Policy",
138: "Computational Analysis and Public Policy",
139: "Environmental Science and Policy",
140: "Public Policy - Evening Master's Program @ 1871 (Part Time MA)",
141: "Art History",
142: "Center for Latin American Studies",
143: "Center for Middle Eastern Studies",
144: "Cinema and Media Studies",
145: "Classics",
146: "Comparative Literature",
147: "Department of Visual Arts (DOVA)",
148: "Digital Studies",
149: "East Asian Languages and Civilizations",
150: "English Language and Literature",
151: "Germanic Studies",
152: "Linguistics",
153: "Master of Arts Program in the Humanities",
154: "Music",
155: "Near Eastern Languages and Civilizations",
156: "Philosophy",
157: "Romance Languages and Literatures",
158: "Slavic Languages and Literatures",
159: "South Asian Languages and Civilizations",
160: "Theater and Performance Studies",
161: "Theater and Performance Studies (TAPS) Option",
162: "Doctor of Comparative Law",
163: "JD Program",
164: "JSD Program",
165: "LLM Program",
166: "Astronomy and Astrophysics",
167: "Biophysical Sciences",
168: "Chemistry",
169: "Master's Program in Computer Sciences",
170: "PhD Program in Computer Sciences",
171: "Financial Math Program",
172: "Geophysical Sciences",
173: "Master of Science in the Physical Sciences Division",
174: "Mathematics",
175: "Physics",
176: "Master of Science in Statistics",
177: "Doctoral Program in Statistics",
178: "Medicine",
179: "Molecular Engineering",
180: "Anthropology",
181: "Center for Latin American Studies",
182: "Center for Middle Eastern Studies",
183: "Committee on International Relations",
184: "Comparative Human Development",
185: "Computational Social Science",
186: "Conceptual and Historical Studies of Science",
187: "Economics",
188: "History",
189: "Computation Social Science",
190: "Master of Arts Program in the Social Sciences",
191: "Political Science",
192: "Psychology",
193: "Social Thought",
194: "Sociology",
195: "Master's Program in Social Service Administration",
196: "Doctoral Program in Social Service Administration" }
let arr = []
Object.keys(e).map((val, ind) => {
    arr.push({id: Number(val), name: e[val]})
})
data.map((val, ind) => {
    arr.push({id: ind, name: val})
})
arr.map(v => {
    console.log(v)
})