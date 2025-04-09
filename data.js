export const blogs = {
  food: [
    {
      id: 1,
      image_url: "./assets/food/food-1.jpg",
      title: "Nothing is better than a morning pancakes",
      description:
        "Pancakes are a great way to start the day. They are easy to make and can be topped with a variety of ingredients. They are also a great way to use up leftover ingredients.",
      author: "John Doe",
      date: "2024-01-01",
      selected: true,
      comments: [],
    },
    {
      id: 2,
      image_url: "./assets/food/food-2.jpg",
      title: "Vibrant Summer Berry & Tropical Fruit Salad",
      description:
        "A refreshing and nutritious fruit salad combining sweet raspberries, juicy blackberries, creamy bananas, crunchy almonds, and exotic mango chunks. This colorful medley offers the perfect balance of flavors and textures, making it an ideal healthy breakfast or light dessert. The almonds add a satisfying crunch while the mix of berries and tropical fruits creates an antioxidant-rich dish that's both delicious and nutritious.",
      author: "Sarah Mitchell",
      date: "2024-02-15",
      selected: false,
      comments: [],
    },
    {
      id: 3,
      image_url: "./assets/food/food-3.jpg",
      title: "The Art of Ramen: A Journey Through Japan's Soul Food",
      description:
        "Dive into the steamy, aromatic world of authentic Japanese ramen. From the rich, creamy tonkotsu broth that simmers for days to the perfectly chewy handmade noodles, discover what makes this humble dish a global sensation. Learn about regional variations, traditional toppings like chashu pork and ajitsuke tamago, and the meticulous craft behind every bowl of this beloved comfort food.",
      author: "Kenji Yamamoto",
      date: "2024-03-01",
      selected: false,
      comments: [
        {
          author: "alex",
          email: "alex@gmail.com",
          date: "2024-3-02",
          text: "That looks delicious",
        },
      ],
    },
    {
      id: 4,
      image_url: "./assets/food/food-4.jpg",
      title: "Vibrant Pink Orange & Garden Fresh Salad",
      description:
        "Experience a delightful fusion of colors and flavors in this unique salad featuring sweet pink oranges, perfectly boiled eggs, creamy avocado, crisp apple slices, and juicy cherries. The pink oranges add a stunning visual element while providing a subtle citrus sweetness that perfectly complements the rich, buttery texture of ripe avocados. Topped with protein-rich eggs and finished with the crisp crunch of fresh apples and the bright pop of cherries, this salad is a beautiful balance of nutrients, textures, and tastes that will brighten any meal.",
      author: "Emma Thompson",
      date: "2024-03-15",
      selected: false,
      comments: [],
    },
  ],
  tech: [
    {
      id: 1,
      image_url: "./assets/tech/tech-1.jpg",
      title: "The Next Generation of VR: Meta Quest 3 Review",
      description:
        "Experience gaming and virtual reality like never before with the Meta Quest 3. This cutting-edge VR headset offers stunning 4K resolution per eye, advanced hand tracking, and a sleek, comfortable design. With improved mixed reality capabilities and a powerful Snapdragon XR2 Gen 2 processor, it delivers incredibly immersive experiences whether you're gaming, working, or exploring virtual worlds. The expanded 110-degree field of view and enhanced haptic feedback controllers create unparalleled presence and interactivity.",
      author: "David Chen",
      date: "2024-03-20",
      selected: true,
      comments: [
        {
          author: "Sarah Miller",
          email: "sarah.m@techreview.com",
          date: "2024-03-21",
          text: "Great detailed review! The improved resolution really makes a huge difference.",
        },
        {
          author: "James Wilson",
          email: "jwilson@vrgamer.net",
          date: "2024-03-22",
          text: "The hand tracking is impressive but I still prefer using the controllers for gaming.",
        },
        {
          author: "Michelle Lee",
          email: "mlee@virtualworld.com",
          date: "2024-03-23",
          text: "Can't wait to try the mixed reality features! Seems like a big step forward.",
        },
      ],
    },
    {
      id: 2,
      image_url: "./assets/tech/tech-2.jpg",
      title: "The Rise of Social Media: Impact on Modern Society",
      description:
        "An in-depth analysis of how social media platforms have transformed communication, business, and daily life. From TikTok's explosive growth to Instagram's evolution and Twitter's rebranding to X, explore how these platforms shape public discourse, influence consumer behavior, and create new opportunities for digital connection. We examine both the benefits and challenges of our increasingly connected world, including mental health impacts, privacy concerns, and the future of social networking.",
      author: "Emily Zhang",
      date: "2024-03-25",
      selected: false,
      comments: [
        {
          author: "Thomas Brown",
          email: "tbrown@digitaltrends.com",
          date: "2024-03-26",
          text: "Fascinating analysis on how social media has become integral to modern life. The section on mental health impacts was particularly enlightening.",
        },
        {
          author: "Rachel Green",
          email: "rgreen@socialmedia.net",
          date: "2024-03-27",
          text: "As someone working in social media marketing, I appreciate the balanced perspective on both opportunities and challenges these platforms present.",
        },
      ],
    },
  ],
  ai: [
    {
      id: 1,
      image_url: "./assets/ai/ai-1.jpg",
      title: "The AI Revolution: Competing or Collaborating with Humans?",
      description:
        "As artificial intelligence continues to advance at an unprecedented pace, concerns grow about AI competing with humans for jobs and creative pursuits. From AI-generated art challenging human artists to language models writing code and content, we explore the complex dynamics between human and artificial intelligence. This article examines key areas where AI is going head-to-head with human capabilities, the ethical implications, and what this means for the future of work and creativity. We'll also look at how society can adapt to ensure both humans and AI can coexist productively.",
      author: "Dr. Sarah Chen",
      date: "2024-03-28",
      selected: true,
      comments: [
        {
          author: "Mark Johnson",
          email: "mjohnson@techethics.org",
          date: "2024-03-29",
          text: "A balanced and thoughtful analysis of a complex issue. We need more discussions about the ethical implications of AI advancement.",
        },
        {
          author: "Lisa Wong",
          email: "lwong@airesearch.com",
          date: "2024-03-30",
          text: "As someone working in AI development, I appreciate how this article addresses both the challenges and opportunities. The key is finding the right balance.",
        },
        {
          author: "James Miller",
          email: "jmiller@futurist.net",
          date: "2024-03-31",
          text: "The section about AI in creative industries really resonated with me. We need to rethink how we value human creativity in an AI-driven world.",
        },
      ],
    },
    {
      id: 2,
      image_url: "./assets/ai/ai-2.jpg",
      title:
        "AI as a Force for Good: How Artificial Intelligence is Empowering Humanity",
      description:
        "Discover the transformative ways artificial intelligence is enhancing human capabilities and solving complex global challenges. From healthcare breakthroughs where AI assists in early disease detection to environmental conservation through smart resource management, AI is becoming a powerful tool for human progress. This article showcases real-world examples of AI-human collaboration, including personalized education systems, scientific research acceleration, and accessibility improvements for people with disabilities. Learn how AI is augmenting rather than replacing human intelligence, creating new opportunities for growth and innovation.",
      author: "Prof. Michael Zhang",
      date: "2024-04-01",
      selected: false,
      comments: [
        {
          author: "Dr. Emily Roberts",
          email: "eroberts@medtech.com",
          date: "2024-04-02",
          text: "The medical applications of AI described here are spot-on. We're seeing remarkable improvements in patient outcomes thanks to AI assistance in diagnostics.",
        },
        {
          author: "David Kumar",
          email: "dkumar@edutech.net",
          date: "2024-04-03",
          text: "The potential of AI in personalized education is incredible. We're already seeing how it helps students learn at their own pace and style.",
        },
        {
          author: "Sophie Anderson",
          email: "sanderson@accessibility.org",
          date: "2024-04-04",
          text: "Thank you for highlighting AI's role in improving accessibility. The advances in assistive technologies are truly life-changing for many people.",
        },
      ],
    },
  ],
  travel: [
    {
      id: 1,
      image_url: "./assets/travel/travel-1.jpg",
      title:
        "The Ultimate Guide to Trip Planning: Making Your Dream Vacation a Reality",
      description:
        "A comprehensive guide on how to plan the perfect trip from start to finish. Learn essential tips on budgeting, choosing destinations, booking accommodations, creating itineraries, and packing efficiently. Whether you're planning a weekend getaway or a month-long adventure, this guide covers everything you need to know to make your travel dreams come true. We'll walk through practical steps like researching local customs, finding the best flight deals, securing travel insurance, and creating flexible schedules that balance sightseeing with relaxation.",
      author: "Sarah Martinez",
      date: "2024-03-15",
      selected: true,
      comments: [
        {
          author: "James Wilson",
          email: "jwilson@travelmore.com",
          date: "2024-03-16",
          text: "This guide is exactly what I needed! The budgeting tips helped me finally start planning my Europe trip. Thanks for the detailed breakdown!",
        },
        {
          author: "Lisa Chen",
          email: "lchen@wanderlust.com",
          date: "2024-03-17",
          text: "Love the section about creating flexible itineraries. I used to over-schedule my trips and feel exhausted. Now I know to leave room for spontaneous adventures.",
        },
        {
          author: "David Thompson",
          email: "dthompson@globetrotter.net",
          date: "2024-03-18",
          text: "The packing tips are gold! Never thought about using packing cubes before. Game changer for my last trip to Asia.",
        },
      ],
    },
    {
      id: 2,
      image_url: "./assets/travel/travel-2.jpg",
      title:
        "Deep Blue Adventures: My First Scuba Diving Experience in the Great Barrier Reef",
      description:
        "Join me as I share my incredible journey into the underwater world of the Great Barrier Reef. From getting PADI certified to coming face-to-face with vibrant coral gardens, tropical fish, and even a friendly sea turtle, this experience changed my perspective on marine life forever. I'll take you through the preparation process, safety measures, and the indescribable feeling of weightlessness as you glide through crystal clear waters. Whether you're an experienced diver or just curious about taking the plunge, this story will inspire you to explore the magnificent world beneath the waves.",
      author: "Mike Anderson",
      date: "2024-03-10",
      selected: false,
      comments: [
        {
          author: "Emma Roberts",
          email: "eroberts@divepro.com",
          date: "2024-03-11",
          text: "Your description of the reef is spot on! I did my first dive there too and it's truly magical. The colors are unlike anything you see above water.",
        },
        {
          author: "Carlos Mendoza",
          email: "cmendoza@oceanlife.com",
          date: "2024-03-12",
          text: "Great tips about preparation! So many new divers underestimate the importance of proper training. Safety first always!",
        },
        {
          author: "Rachel Kim",
          email: "rkim@adventureseeker.com",
          date: "2024-03-13",
          text: "This post gave me the final push I needed to book my certification course. Can't wait to experience this myself!",
        },
      ],
    },
  ],
};
