// This utility generates personalized roadmaps based on user assessment
const generateRoadmap = (assessment, user) => {
  const { field, experienceLevel, goals } = assessment;
  const roadmap = {
    title: `${field.charAt(0).toUpperCase() + field.slice(1)} Career Roadmap`,
    field,
    experienceLevel,
    goals,
    steps: []
  };

  // Define steps based on field and experience level
  if (field === 'technology') {
    if (experienceLevel === 'beginner') {
      roadmap.steps = [
        {
          order: 1,
          title: 'Learn Programming Fundamentals',
          description: 'Master the basics of programming with a beginner-friendly language like Python or JavaScript',
          resources: [
            {
              type: 'course',
              title: 'Python for Everybody',
              link: 'https://www.coursera.org/specializations/python',
              provider: 'Coursera',
              estimatedTime: '3 months'
            },
            {
              type: 'tutorial',
              title: 'JavaScript Basics',
              link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
              provider: 'MDN Web Docs',
              estimatedTime: '1 month'
            }
          ]
        },
        {
          order: 2,
          title: 'Build Simple Projects',
          description: 'Apply your knowledge by building small projects to reinforce learning',
          resources: [
            {
              type: 'project',
              title: 'Build a Todo App',
              link: 'https://github.com/example/todo-app-tutorial',
              provider: 'GitHub',
              estimatedTime: '2 weeks'
            }
          ]
        }
        // Add more steps based on specific goals
      ];
    } else if (experienceLevel === 'intermediate') {
      // Intermediate roadmap steps
      roadmap.steps = [
        {
          order: 1,
          title: 'Specialize in a Tech Stack',
          description: 'Choose and master a specific technology stack (e.g., MERN, MEAN, LAMP)',
          resources: [
            {
              type: 'course',
              title: 'Full Stack Web Development',
              link: 'https://www.udemy.com/course/the-web-developer-bootcamp/',
              provider: 'Udemy',
              estimatedTime: '3 months'
            }
          ]
        }
        // Add more steps
      ];
    }
    // Add advanced level steps
  } else if (field === 'business') {
    // Business field roadmap
    roadmap.steps = [
      {
        order: 1,
        title: 'Business Fundamentals',
        description: 'Learn core business concepts and principles',
        resources: [
          {
            type: 'course',
            title: 'Introduction to Business',
            link: 'https://www.coursera.org/learn/business-foundations',
            provider: 'Coursera',
            estimatedTime: '2 months'
          }
        ]
      }
      // Add more steps
    ];
  }

  // Add common final steps to all roadmaps
  roadmap.steps.push({
    order: roadmap.steps.length + 1,
    title: 'Prepare for Job Applications',
    description: 'Polish your resume, build portfolio, and practice interviewing',
    resources: [
      {
        type: 'article',
        title: 'How to Write a Tech Resume',
        link: 'https://example.com/tech-resume-guide',
        provider: 'Career Blog',
        estimatedTime: '2 weeks'
      }
    ]
  });

  return roadmap;
};

module.exports = generateRoadmap;