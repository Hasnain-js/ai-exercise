const  exerciseData = [
    {
      "id": "1",
      "title": "Your Top Talents",
      "objective": "Your top Talents are unique aspects of your personality that set you apart from others. This exercise helps identify key Talents that define who you are.",
      "instructions": [
        {
          "topic": "Selecting Talents",
          "value": "Choose a minimum of 3 and a maximum of 5 Talents from the grid below that best represent you. These Talents could be qualities like 'Adventurous,' 'Creative,' 'Driven,' etc. If you don't see a specific Trait listed, feel free to type it into the User Defined boxes provided."
        },
        {
          "topic": "Why It Matters",
          "value": "These Talents will form the foundation of your brand narrative. They showcase what makes you a valuable candidate and how you can contribute uniquely to a workplace."
        }
      ],
      "understanding": {
        "title": "Understanding Your Top Talents:",
        "value": "Talents are innate traits that define your character or personality. They reflect your strengths and what you naturally bring to any role or team. Select traits that genuinely resonate with you. They should reflect not only what you do but also who you are as a professional. Once you've chosen your traits, we'll help you weave them into a compelling narrative. Employers look beyond just skills; they want to know what drives you and how you fit into their team culture."
      },
      "question": [
        "Adventurous",
        "Ambitious",
        "Agreeable",
        "Compassionate",
        "Confident",
        "Courageous",
        "Creative",
        "Curious",
        "Driven",
        "Empathetic",
        "Extravert",
        "Flexible",
        "Helpful",
        "Honest",
        "Humble",
        "Tenacious"
      ]
    },
    {
      "id": "2",
      "title": "Your Top Skills",
      "objective": "Skills are practical abilities and expertise gained through practice and experience. This exercise helps identify your key skills that are essential to your professional success.",
      "instructions": [
        {
          "topic": "Identifying Skills",
          "value": "Choose a minimum of 3 and a maximum of 5 skills from the list provided below that best represent your capabilities. Skills could include technical skills like 'Computer Science,' 'Data Analysis,' or soft skills like 'Strong Communicator,' 'Leadership,' etc. If you don't see a specific skill listed, feel free to type it into the User Defined boxes provided."
        },
        {
          "topic": "Why It Matters",
          "value": "These skills form the backbone of your professional profile. They demonstrate what you can contribute to a role and how you solve problems effectively."
        }
      ],
      "understanding": {
        "title": "Understanding Your Top Skills:",
        "value": "Skills are practical and measurable abilities that you bring to any job. They are developed through training, practice, and hands-on experience. Choose skills that you excel in and enjoy using. They should align with your career goals and demonstrate your strengths to potential employers. Your selected skills will showcase your expertise and proficiency in key areas relevant to your desired roles. They establish your credibility as a candidate."
      },
      "question": [
        "Adaptable",
        "Approachable",
        "Strong Communicator",
        "Computer Science",
        "Customer Service",
        "Data Analysis",
        "Graphic Arts",
        "Leadership",
        "Multi-Tasking",
        "Multi-Lingual",
        "Problem Solving",
        "Project Management",
        "Research Expertise",
        "Sales Savvy",
        "Teamwork",
        "Time Management"
      ]
    },
    {
      "id": "3",
      "title": "Your Targeted Industries",
      "objective": "Industries refer to broad sectors of the economy where you aim to build your career. This exercise helps you identify and prioritize the industries that align with your career goals and aspirations.",
      "instructions": [
        {
          "topic": "Selecting Industries",
          "value": "Choose a minimum of 3 and a maximum of 5 industries from the list provided below that you are targeting for your career. Industries could include sectors like 'Aerospace,' 'Healthcare,' 'Financial Services,' 'Automotive,' etc. If you don't see a specific industry listed, feel free to type it into the User Defined boxes provided."
        },
        {
          "topic": "Why It Matters",
          "value": "Identifying your targeted industries helps focus your job search efforts and tailor your brand narrative to fit the needs and dynamics of those sectors."
        }
      ],
      "understanding": {
        "title": "Understanding Your Targeted Industries:",
        "value": "Industries are large segments of the economy characterized by similar types of businesses or organizations. They represent where you want to apply your skills and expertise. Select industries that resonate with your career aspirations and where you believe you can make a meaningful impact. Consider factors such as growth opportunities, alignment with your skills, and personal interests. Your chosen industries will shape how you position yourself professionally. They demonstrate your focus and commitment to specific sectors, which can make you a more attractive candidate."
      },
      "question": [
        "Accounting /Finance",
        "Administrative",
        "Analytics",
        "Customer Service",
        "Human Resources",
        "IT",
        "Legal",
        "Marketing",
        "Operations",
        "Procurement",
        "Product Development",
        "Production",
        "Public Relations",
        "Research Development",
        "Sales",
        "Supply Chain"
      ]
    },
    {
      "id": "4",
      "title": "Your Desired Functional Disciplines",
      "objective": "Functional disciplines refer to specific areas or roles within an industry where you aim to specialize and build your career expertise. This exercise helps you identify and prioritize the disciplines that align with your career goals.",
      "instructions": [
        {
          "topic": "Selecting Disciplines",
          "value": "Choose a minimum of 3 and a maximum of 5 functional disciplines from the list provided below that you are targeting for your career. Disciplines could include roles such as 'marketing,' 'finance,' 'human resources,' 'software development,' etc."
        },
        {
          "topic": "Why It Matters",
          "value": "Identifying your desired functional disciplines helps focus your job search efforts and tailor your brand narrative to highlight your skills and experiences in these specific areas."
        }
      ],
      "understanding": {
        "title": "Understanding Your Desired Functional Disciplines:",
        "value": "Disciplines are specific areas of expertise or roles within an industry that require distinct skills and knowledge. Choose disciplines that match your strengths, interests, and career aspirations. Consider where you can make a meaningful impact and where your skills are most valuable. Your chosen disciplines showcase your expertise and commitment to developing specialized skills within targeted areas. They highlight what sets you apart in your chosen field. Research each functional discipline thoroughly before making your selections. This will help you understand the skills required and the typical responsibilities associated with each role."
      },
      "question": [
        "Aerospace",
        "Automotive",
        "Business Services",
        "Commerce",
        "Entertainment",
        "Financial Services",
        "Healthcare",
        "Insurance",
        "Investment Banking",
        "Legal",
        "Manufacturing",
        "Medical",
        "Pharmaceuticals",
        "Retail",
        "Telecommunications",
        "Tourism",
        "Transportation",
        "Research",
        "Food Service",
        "Waste Management"
      ]
    }
  ]

export const fetchExercise = (id) => {
    const exercise = exerciseData.find((item) => item.id === id)
    if (exercise) {
        return exercise
      } else {
        return { error: 'Exercise not found' }
      }
}
