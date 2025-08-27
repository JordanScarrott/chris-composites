import type { Course, CourseAdapter as CourseAdapterInterface } from './interface';
import { MockCourseClient } from './mockCourseClient';
import { translateCourse } from './utils';

class CourseAdapter implements CourseAdapterInterface {
  private client = new MockCourseClient();

  async getAllCourses(): Promise<Course[]> {
    const rawCourses = await this.client.getAllCourses();
    return rawCourses.map(translateCourse);
  }

  async getCourse(slug: string): Promise<Course | undefined> {
    const rawCourse = await this.client.getCourse(slug);
    if (!rawCourse) {
      return undefined;
    }
    return translateCourse(rawCourse);
  }
}

export const courseAdapter = new CourseAdapter();
