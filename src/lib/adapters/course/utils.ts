import type { Course } from './interface';

export function translateCourse(rawCourse: any): Course {
  return {
    id: rawCourse.id,
    slug: rawCourse.slug,
    title: rawCourse.title,
    description: rawCourse.description,
    image: rawCourse.image,
    tags: rawCourse.tags,
    author: rawCourse.author,
    publishedAt: rawCourse.publishedAt,
    chapters: rawCourse.chapters,
    whatYouWillLearn: rawCourse.whatYouWillLearn,
    whatYouWillBuild: rawCourse.whatYouWillBuild,
  };
}
