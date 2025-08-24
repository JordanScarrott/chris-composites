export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  author: string;
  publishedAt: string;
  chapters: Chapter[];
  whatYouWillLearn: string[];
  whatYouWillBuild: string;
}

export interface Chapter {
  title: string;
  description: string;
}
