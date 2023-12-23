
const skills_object = [
  {
    category: "Management",
    skills: [
      {
        name: "Area Management",
        proficiency: "Advanced",
        description: "Successfully managed sales territories and teams.",
      },
      {
        name: "Sales Management",
        proficiency: "Advanced",
        description:
          "Led and coordinated sales operations for optimum results.",
      },
    ],
  },
  {
    category: "Career Development",
    skills: [
      {
        name: "Career Progression",
        proficiency: "Advanced",
        description: "Consistent growth and promotions throughout the career.",
      },
      {
        name: "Professional Transitions",
        proficiency: "Advanced",
        description:
          "Navigated successful transitions between roles and companies.",
      },
    ],
  },
  {
    category: "Education",
    skills: [
      {
        name: "Business Administration",
        proficiency: "Advanced",
        description:
          "Pursuing Executive MBA with a focus on Business Administration.",
      },
      {
        name: "Intermediate Commerce",
        proficiency: "Advanced",
        description:
          "Completed Intermediate in Commerce at Lohagara Adarsha College.",
      },
    ],
  },
  {
    category: "Life Events",
    skills: [
      {
        name: "Adaptability",
        proficiency: "Advanced",
        description:
          "Successfully adapted to new roles, locations, and life events.",
      },
      {
        name: "Professional Growth",
        proficiency: "Advanced",
        description:
          "Demonstrated continuous professional and personal growth.",
      },
    ],
  },
  {
    category: "Sales Strategies",
    skills: [
      {
        name: "Strategic Planning",
        proficiency: "Advanced",
        description:
          "Developed and executed effective sales strategies for business growth.",
      },
      {
        name: "Client Relationship Management",
        proficiency: "Advanced",
        description:
          "Built and maintained strong relationships with clients for sustained success.",
      },
    ],
  },
  {
    category: "Leadership",
    skills: [
      {
        name: "Team Leadership",
        proficiency: "Advanced",
        description:
          "Provided effective leadership to teams, fostering collaboration and success.",
      },
      {
        name: "Decision-Making",
        proficiency: "Advanced",
        description:
          "Made informed and timely decisions contributing to organizational goals.",
      },
    ],
  },
];

function SkillsComp() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
      {skills_object.map((dt, index) => {
        return (
          <div
            key={index}
            className="col-span-3 md:col-span-1 rounded-md bg-neutral bg-opacity-30"
          >
            <p className="text-black font-semibold text-lg p-3">
              {dt.category}
            </p>
            <div className="grid gap-4">
              {dt.skills.map((sk, index) => {
                return (
                  <div
                    key={index}
                    className="bg-neutral bg-opacity-40 p-4 m-2 rounded-md"
                  >
                    <p className="my-2">
                      <b className="text-highlight"> Name: </b>{" "}
                      <span className="bg-gray-300 bg-opacity-50 px-1 py-1 rounded-md">
                        {sk.name}
                      </span>
                    </p>
                    <p className="my-2">
                      <b className="text-highlight"> Proficiency: </b>{" "}
                      <span className="bg-gray-300 bg-opacity-50 px-1 py-1 rounded-md">
                        {sk.proficiency}
                      </span>
                    </p>
                    <p className="my-2">
                      <b className="text-highlight"> Description: </b>
                      {sk.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillsComp;
