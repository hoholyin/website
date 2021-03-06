import cs2040_ay1920_s1 from "../teaching_feedback/cs2040_ay1920_s1.pdf";
import cs2040_ay1920_s2 from "../teaching_feedback/cs2040_ay1920_s2.pdf";
import cs2040s_ay2021_s1 from "../teaching_feedback/cs2040s_ay2021_s1.pdf";
import cs1231s_ay2021_s1 from "../teaching_feedback/cs1231s_ay2021_s1.pdf";
import cs2040_ay2021_s2 from "../teaching_feedback/cs2040_ay2021_s2.pdf";
import cs2040s_ay2122_s1 from "../teaching_feedback/cs2040s_ay2122_s1.pdf";
import cs1231s_ay2122_s1 from "../teaching_feedback/cs1231s_ay2122_s1.pdf";
import TeachingList from "../components/teachingList/teachingList";


const Teaching = (props) => {
    const teachings = [
        {
          module_code: "CS1231S",
          module: "Discrete Structures",
          semesters: [
              {
                  sem: "AY20/21 Semester 1",
                  feedback: cs1231s_ay2021_s1
              },
              {
                  sem: "AY21/22 Semester 1",
                  feedback: cs1231s_ay2122_s1,
              },
          ],
        },
        {
            module_code: "CS2040/CS2040S",
            module: "Data Structures and Algorithms",
            semesters: [
                {
                    sem: "AY19/20 Semester 1",
                    feedback: cs2040_ay1920_s1,
                },
                {
                    sem: "AY19/20 Semester 2",
                    feedback: cs2040_ay1920_s2,
                },
                {
                    sem: "AY20/21 Semester 1",
                    feedback: cs2040s_ay2021_s1,
                },
                {
                    sem: "AY20/21 Semester 2",
                    feedback: cs2040_ay2021_s2,
                },
                {
                    sem: "AY21/22 Semester 1",
                    feedback: cs2040s_ay2122_s1
                },
            ]
        },
        {
            module_code: "CS3217",
            module: "Software Engineering on Modern Application Platforms",
            semesters: [
                {
                    sem: "AY20/21 Semester 2",
                    feedback: "Feedback not available",
                },
                {
                    sem: "AY21/22 Semester 2",
                    feedback: "Feedback not available",
                }
            ],
        },
        {
            module_code: "CS4218",
            module: "Software Testing",
            semesters: [
                {
                    sem: "AY21/22 Semester 2",
                    feedback: "To be updated",
                },
            ],
        },
    ]
    return (
        <div className="page-container">
            <div className="header-container">
                <span>Teaching</span>
            </div>
            <TeachingList isMobile={props.isMobile} teachings={teachings} />
        </div>
    )
}

export default Teaching;
