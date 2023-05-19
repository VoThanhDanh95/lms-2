// nếu question_type == checkbox thì số lượng câu hỏi bằng số lượng đáp án
// nếu question_type == short answer thì số lượng câu hỏi bằng 1.
// sau khi submit form thì sẽ tạo ra list solution tương ứng.

export const SECTION_LIST = [
    {
        "content": `<p><strong>The development of the London underground railway</strong> </p><p><br></p><p> In the first half of the 1800s, London’s population grew at an astonishing rate, and the central area became increasingly congested. In addition, the expansion of the overground railway network resulted in more and more passengers arriving in the capital. However, in 1846, a Royal Commission decided that the railways should not be allowed to enter the City, the capital’s historic and business centre. The result was that the overground railway stations formed a ring around the City. The area within consisted of poorly built, overcrowded slums and the streets were full of horse-drawn traffic. Crossing the City became a nightmare. It could take an hour and a half to travel 8 km by horse-drawn carriage or bus. Numerous schemes were proposed to resolve these problems, but few succeeded. </p><p><br></p><p>Amongst the most vocal advocates for a solution to London’s traffic problems was Charles Pearson, who worked as a solicitor for the City of London. He saw both social and economic advantages in building an underground railway that would link the overground railway stations together and clear London slums at the same time. His idea was to relocate the poor workers who lived in the inner-city slums to newly constructed suburbs, and to provide cheap rail travel for them to get to work. Pearson’s ideas gained support amongst some businessmen and in 1851 he submitted a plan to Parliament. It was rejected, but coincided with a proposal from another group for an underground connecting line, which Parliament passed. </p><p><br></p><p>  The two groups merged and established the Metropolitan Railway Company in August 1854. The company’s plan was to construct an underground railway line from the Great Western Railway’s (GWR) station at Paddington to the edge of the City at Farringdon Street - a distance of almost 5 km. The organisation had difficulty in raising the funding for such a radical and expensive scheme, not least because of the critical articles printed by the press. Objectors argued that the tunnels would collapse under the weight of traffic overhead, buildings would be shaken and passengers would be poisoned by the emissions from the train engines. However, Pearson and his partners persisted. </p><p><br></p><p>  The GWR, aware that the new line would finally enable them to run trains into the heart of the City, invested almost £250,000 in the scheme. Eventually, over a five-year period, £1m was raised. The chosen route ran beneath existing main roads to minimise the expense of&nbsp; demolishing buildings. Originally scheduled to be completed in 21 months, the construction of the underground line took three years. It was built just below street level using a technique known as ‘cut and cover’. A trench about ten metres wide and six metres deep was dug, and the sides temporarily held up with timber beams. Brick walls were then constructed, and finally a brick arch was added to create a tunnel. A two-metre-deep layer of soil was laid on top of the tunnel and the road above rebuilt. </p><p><br></p><p>  The Metropolitan line, which opened on 10 January 1863, was the world’s first underground railway. On its first day, almost 40,000 passengers were carried between Paddington and Farringdon, the journey taking about 18 minutes. By the end of the Metropolitan’s first year of operation, 9.5 million journeys had been made. </p><p><br></p><p>  Even as the Metropolitan began operation, the first extensions to the line were being authorised; these were built over the next five years, reaching Moorgate in the east of London and Hammersmith in the west. The original plan was to pull the trains with steam locomotives, using firebricks in the boilers to provide steam, but these engines were never introduced. Instead, the line used specially designed locomotives that were fitted with water tanks in which steam could be condensed. However, smoke and fumes remained a problem, even though ventilation shafts were added to the tunnels. </p><p><br></p><p>  Despite the extension of the underground railway, by the 1880s, congestion on London’s streets had become worse. The problem was partly that the existing underground lines formed a circuit&nbsp; around the centre of London and extended to the suburbs, but did not cross the capital’s centre. The ‘cut and cover’ method of construction was not an option in this part of the capital. The only alternative was to tunnel deep underground. </p><p><br></p><p>  Although the technology to create these tunnels existed, steam locomotives could not be used in such a confined space. It wasn’t until the development of a reliable electric motor, and a means of transferring power from the generator to a moving train, that the world’s first deep-level electric railway, the City &amp; South London, became possible. The line opened in 1890, and ran from the City to Stockwell, south of the River Thames. The trains were made up of three carriages and driven by electric engines. The carriages were narrow and had tiny windows just below the roof because it was thought that passengers would not want to look out at the tunnel walls. The line was not without its problems, mainly caused by an unreliable power supply. Although the City &amp; South London Railway was a great technical achievement, it did not make a profit. Then, in 1900, the Central London Railway, known as the ‘Tuppenny Tube’, began operation using new electric locomotives. It was very popular and soon afterwards new railways and extensions were added to the growing tube network. By 1907, the heart of today’s Underground system was in place.</p>`,
        "question-list": [
            {
                "questionText": `Do the following statements agree with the information given in Reading Passage 1?
                <br>
                In boxes 7-13 on your answer sheet, write
                <br>
                TRUE    if    the    statement    agrees    with    the    information
                <br>
                FALSE if the statement contradicts the information
                <br>
                NOT GIVEN if there is no information on this`,
                "questionType": "description",
            },

            {
                "questionText": "Do you know about NhaCuaDi",
                "questionType": "radio",
                "options": [
                    { "optionText": "Yes", "isCorrect": true },
                    { "optionText": "No" }
                ],
                "answerKey": ["Yes"],
                "startIndex": 1, // add - calculate after submit form
                "numQuestion": 1,
            },
            {
                "questionText": "How much do you love NhaCuaDi",
                "questionType": "checkbox",
                "options": [
                    { "optionText": "Low" },
                    { "optionText": "Medium" , "isCorrect": true },
                    { "optionText": "Hard" , "isCorrect": true }
                ],
                "answerKey": ["Medium", "Hard"],
                "startIndex": 2, // add - calculate after submit form
                "numQuestion": 2,
            },
            {
                "questionText": "Write 500 words to show your thinking about NhaCuaDi",
                "questionType": "text",
                "answerKey": ["Nice", "nice", "nicee"],
                "startIndex": 4, // add - calculate after submit form
                "numQuestion": 1,
            }
        ]
    }
]