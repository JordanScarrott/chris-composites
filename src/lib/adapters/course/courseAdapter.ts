import type { Course, CourseAdapter as CourseAdapterInterface } from './interface';
import { MockCourseClient } from './mockCourseClient';

class CourseAdapter implements CourseAdapterInterface {
  private client = new MockCourseClient();

  async getAllCourses(): Promise<Course[]> {
    const rawCourses = await this.client.getAllCourses();
    return rawCourses.map(this.translateCourse);
  }

  async getCourse(slug: string): Promise<Course | undefined> {
    const rawCourse = await this.client.getCourse(slug);
    if (!rawCourse) {
      return undefined;
    }
    return this.translateCourse(rawCourse);
  }

  private translateCourse(rawCourse: any): Course {
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
}

export const courseAdapter = new CourseAdapter();
