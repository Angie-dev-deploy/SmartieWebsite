import React from "react";

import NewPartnerCard from "./NewPartnerCard";

import "../styles/Partners.css";

import ucv from "../resources/ucv.png";
import acceu from "../resources/acceu.png";
import bari from "../resources/bari.png";
import malaga from "../resources/malaga.png";
import zilina from "../resources/zilina.png";
import lisboa from "../resources/lisboa.png";
import ljubljana from "../resources/ljubliana.png";
import babes from "../resources/babes.png";
import fhoo from "../resources/fhoo.png";

import roflag from "../resources/roflag.png";
import germanyflag from "../resources/germanyflag.png";
import italyflag from "../resources/italyflag.png";
import spainflag from "../resources/spainflag.png";
import slovakiaflag from "../resources/slovakiaflag.png";
import sloveniaflag from "../resources/sloveniaflag.png";
import austriaflag from "../resources/austriaflag.png";
import portugalflag from "../resources/portoflag.png";

const PartnersComponent = () => {

    return (
        <div className="partners-page">
            <div className="partners-page-description">
                <div className="description-content" style={{display: "flex", flexDirection: "column"}}>
                    <div className="text-div">
                        <h1 className="partners-title">Our Partners</h1>
                        <p className="partners-p">
                        SMARTIE collaborates with a diverse network of universities, 
                        research institutions, and industry leaders across Europe. 
                        Together, we are committed to advancing the responsible integration of AI in higher education by sharing expertise, 
                        fostering innovation, and building sustainable AI ecosystems. Our partners play a vital role in shaping the future of 
                        education in an AI-driven world.
                        </p>
                    </div>
                </div>
            </div>
            <div className="partner-cards">
                <NewPartnerCard
                    partnerImage={ucv}
                    partnerName="University of Craiova"
                    partnerFlag={roflag}
                    countryName={"Romania"}
                    coordinator={true}
                    email="ionel.savu@edu.ucv.ro"
                    phone="+40 777 777 777"
                    contactPerson="Ionel-Dănuț Savu, Prof. PhD. Habil."
                    description={`University of Craiova is a Romanian prestigious institution of higher education, part of the European academic community, sharing cultural values, moral, educational and scientific aspects of it.

Since its founding, in 1947, University of Craiova has undertaken the mission to contribute to the development of knowledge, science and national culture, their integration into the universal patrimony.

Acceptance of competition and participation in the exchange of values allowed build-up of a valuable teaching staff, competent trainer and generous scientific and cultural elites, currently consisting of over 1,000 teachers.

Throughout its existence, the University of Craiova has evolved into a complex structure, which now includes 12 Faculties and 2 independent Departments. The educational offer includes 47 license areas, with 85 study programs, and 42 master's programs with 84 study programs. The offer continues with Doctoral Schools for each faculty, preparing more than 200 PhD students.

University of Craiova provide to all of its over 20,000 students excellent education at all levels. University of Craiova has appropriate expertise in steel structures, organizing specific Bachelor study programs related to civil engineering, mechanical engineering, welding engineering as well as material science.`}
                />

                <NewPartnerCard
                    partnerImage={acceu}
                    partnerName="ACCEU GmbH"
                    partnerFlag={germanyflag}
                    countryName={"Germany"}
                    email="landinez@aceeu.org"
                    phone="+40 777 777 777"
                    contactPerson="Lina Landinez, Dr."
                    description={`An affiliate of ENQA and a full-fledged member of INQAAHE, ACEEU is an international quality assurance body dedicated to advancing higher education by supporting universities in their transformation process towards becoming more entrepreneurial and engaged. With the ultimate goal of fostering the creation of greater social, economic and cultural impacts by universities, ACEEU accredits universities around the world in its two main accreditation programmes: Entrepreneurial University Accreditation and Engaged University Accreditation. Having successfully accredited institutions in Europe, Latin America, Asia and Australia, with 20+ more institutions in the process, the Council is currently designing a departmental level accreditation, as well as a program level accreditation on 21st Century Skills.

Aiming to create a pathway towards recognised excellence in entrepreneurship and engagement for universities, ACEEU's activities are clustered around three main steps: (1) promoting, (2) evaluating, and (3) celebrating excellence.

Founded in 2016 as part of the University Industry Innovation Network (UIIN) in Amsterdam, the Netherlands, ACEEU spun out of UIIN in 2019 to form an independent organization and moved its headquarters to Muenster in Germany.`}
                />

                <NewPartnerCard
                    partnerImage={lisboa}
                    partnerName="University of Lisbon"
                    partnerFlag={portugalflag}
                    countryName={"Portugal"}
                    email="inespires@tecnico.ulisboa.pt"
                    phone="+40 777 777 777"
                    contactPerson="Inês da Fonseca Ascenso Pires, Assoc. Prof. PhD."
                    description={`Universidade de Lisboa (ULisboa) is the largest and most prestigious university in Portugal and it is one of Europe's leading universities. Notwithstanding assessment methods or criteria, ULisboa also leads the main international rankings and is amongst the 200 best universities worldwide. Heir to an academic tradition that spans over seven centuries, ULisboa acquired its current status in July 2013, following the merger of the former Universidade Técnica de Lisboa and Universidade de Lisboa.

ULisboa welcomes more than 7000 foreign students every year - about 14,5% of the total number of students - from over 100 countries, seeking high quality education.

Bringing together various academic fields, ULisboa has a privileged position for enabling the contemporary evolution of science, technology, arts and humanities.

Instituto Superior Técnico (IST) is the largest and most reputed school of engineering, science and technology in Portugal. IST aims to contribute to the development of society promoting and sharing excellence in higher education in the fields of Architecture, Engineering, Science and Technology. IST offers Bachelor, Master and PhD programmes, lifelong training and develops Research, Development and Innovation activities, which are essential to provide an education based on the top international standards.`}
                />

                <NewPartnerCard
                    partnerImage={ljubljana}
                    partnerName="University of Ljubljana"
                    partnerFlag={sloveniaflag}
                    countryName={"Slovenia"}
                    email="damjan.klobcar@fs.uni-lj.si"
                    phone="+40 777 777 777"
                    contactPerson="Damjan Klobčar Assoc. Prof. PhD."
                    description={`University of Ljubljana is the oldest and largest higher education and scientific research institution in Slovenia established in 1919. It has approximately 40,000 undergraduate and postgraduate students and employs approximately 6,000 higher education teachers, researchers, assistants, and administrative staff in 23 faculties and three arts academies.

The University of Ljubljana is renowned for its quality social and natural sciences and technical study programmes, structured in accordance with the Bologna Declaration. Our projects keep pace with the latest developments in the areas of arts, sciences and technology at home and abroad.

The University of Ljubljana has been ranked among the top 600 universities by the prestigious Academic Ranking of World Universities (ARWU); it is placed 374th in The Center for World University Rankings (CWUR), listed in the 801-1000 group in the Times Higher Education (THE) ranking, and the 601-650 group in the Quacquarelli Symonds ranking.

The University of Ljubljana has close ties with Slovenian companies and foreign enterprises. Our partners include multinational corporations and the most successful Slovenian companies. As we are fully aware of the importance of knowledge and skills in obtaining our own financial sources, we are increasingly developing our market-oriented activities every year.`}
                />

                <NewPartnerCard
                    partnerImage={zilina}
                    partnerName="University of Zilina"
                    partnerFlag={slovakiaflag}
                    countryName={"Slovakia"}
                    email="andrej.david@uniza.sk"
                    phone="+40 777 777 777"
                    contactPerson="Andrej Dávid, Prof. PhD."
                    description={`The University of Žilina as a public university provides education at all three levels of higher education (Bachelor's degree, Engineer/Master's degree and Doctoral degree) in both full-time and part-time forms. Approximately 7530 students currently study at seven faculties in all forms of study.

Cooperation with foreign universities enables students and teachers to participate actively in international educational and research projects. Within its ERASMUS Programme, the University – as the only one in Slovakia - has been listed among 40 most successful universities of the EU in the field of teacher mobility for a ten-year period. The Faculty of Security Engineering, University of Žilina, (FSE UNIZA) prepares security engineering experts with knowledge in methods of crisis management that can identify, analyse and assess risks in various types of environments, and to manage preventive activities and adequate response. It educates crisis managers, rescue service workers and experts in managing the processes of protection of persons and property. The faculty is more than sixty years old and has established an excellent position in the professional security and safety community in Slovakia and abroad. It has developed cooperation with educational and research institutions, public administration institutions and business companies in the respective fields.`}
                />

                <NewPartnerCard
                    partnerImage={bari}
                    partnerName="Polytechnic University of Bari"
                    partnerFlag={italyflag}
                    countryName={"Italy"}
                    email="giuseppe.casalino@poliba.it"
                    phone="+40 777 777 777"
                    contactPerson="Giuseppe Casalino, Prof. PhD Habil."
                    description={`Politecnico di Bari is a prestigious public university located in the city of Bari, in the southern region of Puglia, Italy. The university was founded in 1990 and has since become one of the leading technical universities in Italy.

The Politecnico di Bari offers undergraduate and graduate programs in engineering, architecture, design, and industrial chemistry. It has a strong emphasis on research, innovation, and technology transfer, collaborating with companies, research centers, and international institutions to promote scientific and technological progress.

The university campus is modern and well-equipped, with state-of-the-art facilities, including libraries, laboratories, computer rooms, and sports facilities. The campus is located in a convenient area, close to the city center, with good transportation links to the rest of the city.

Politecnico di Bari is known for its high-quality education, prestigious faculty, and excellent career prospects for its graduates. It has a strong international orientation, welcoming students from all over the world, and offering exchange programs, internships, and joint research projects with universities abroad. Overall, Politecnico di Bari is an excellent choice for students seeking a world-class technical education in a dynamic and welcoming environment.`}
                />

                <NewPartnerCard
                    partnerImage={malaga}
                    partnerName="University of Málaga"
                    partnerFlag={spainflag}
                    countryName={"Spain"}
                    email="mgsa23@uma.es"
                    phone="+40 777 777 777"
                    contactPerson="Manuel Gonzalez Sanchez, Prof. Dr."
                    description={`The University of Malaga (UMA) is one of Spain's premiere institutions of higher education (world ranking Webometrics: 424) [2021]. Since its foundation back in 1972, UMA has rapidly expanded its international presence and prestige.

Currently, UMA has 2 campuses (1.797.247 m2), +35,700 students, +2,500 professors, +1900 administrative staff, 23 faculties and schools, 82 departments, 200 educational programmes (incl. 68 undergraduate, 74 master and 22 PhD programmes), 309 research groups, research projects (425 national / 150 EU) and +1,800 business contacts. Regarding international relations, UMA has bilateral agreements with +945 universities from all over the world with +1,500 incoming and +1,100 outgoing exchange students per year and +100 incoming and +200 outgoing exchange staff per year. UMA participates actively in international, national and regional as well as privately-funded programmes, all of them managed by the Office of International Relations and Cooperation. UMA is member of +100 networks and associations.

UMA stimulates educational innovation and research by boosting the quality of its professors and research groups through their participation in international research projects -managed by Research Results Transference Office (OTRI) - with the support and sponsorship of enterprises from local TechPark (PTA).`}
                />

                <NewPartnerCard
                    partnerImage={fhoo}
                    partnerName="University of Applied Sciences"
                    partnerFlag={austriaflag}
                    countryName={"Austria"}
                    email="lisa-maria.putz-egger@fh-steyr.at"
                    phone="+40 777 777 777"
                    contactPerson="Lisa-Maria Putz-Egger, Prof. PhD."
                    description={`Being one of the strongest Universities of Applied Sciences in terms of research in the German-speaking area, the University of Applied Sciences Upper Austria (FH OOE) offers 68 internationally recognized academic degree programmes.

FH OOE focuses on application-oriented and innovative research in 10 Centers of Excellence and research focal areas with partners from business to society. In 2020 FH OOE conducted 557 R&D projects, ranging from small single projects for enterprises, multi-annual projects that are financially supported by public authorities up to long-term partnerships in joint research centres, located at our schools. It participated in 30+ projects in FP7, H2020, JTIs und JRPs as beneficiary and coordinated seven of them with a turnover of about 20 million Euros a year. In 2020 the FHOOE participated in more than 50 other EU-projects funded through e.g. EFRE-INTERREG or ERA-Net as well as projects funded by national funding agencies.

The transport and mobility department at the Campus Steyr is involved in numerous national and European projects and aims to support the greening of transport processes. Current projects concentrate on eco-friendly multimodal transport as well as to create knowledge and awareness for green, sustainable transport especially through education, training, and visibility of this subject`}
                />

                <NewPartnerCard
                    partnerImage={babes}
                    partnerName="Babeș-Bolyai University"
                    partnerFlag={roflag}
                    countryName={"Romania"}
                    email="ioan.hosu@ubbcluj.ro"
                    phone="+40 777 777 777"
                    contactPerson="Ioan Hosu, Prof. Dr. Habi"
                    description={`Babes Bolyai University is a dynamic, but also traditional institution, with deep roots in Central Europe and strong international academic ties. Its origins date back to 1581, which makes it the oldest institution of higher education in Romania. It was named after two prominent Transylvanian scientists: the Romanian biologist Victor Babes and the Hungarian mathematician Janos Bolyai.

Located in Transylvania, a European province with a complex history, UBB is the crowning achievement of a long series of attempts to establish here a higher education institution. Thus, the University’s international recognition is materialized in different forms of collaboration and joint scientific programmes with other well-renowned universities from all around the world (Leipzig Univ., Germany; Corvinus Univ., Hungary; Univ. of „La Sapienza”, Italy, Paris XII, France, Michigan State Univ., USA; Dongguk Univ., Korea).

It is the largest Romanian university (approximately 45.000 students and 1.700 faculty staff), situated at the confluence of the Eastern and Western cultures. As an academic public institution, its aim is to promote and sustain the development of specific cultural components within the local, regional, national and international community. It provides a wide range of internationally competitive BA, MA and Ph.D. programmes in English, French or Italian.`}
                />

                

            </div>
        </div>
      
    );
}
export default PartnersComponent;