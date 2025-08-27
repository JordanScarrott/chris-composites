import courses from '../../../data/courses.json';

export class MockCourseClient {
  async getAllCourses() {
    return courses;
  }

  async getCourse(slug: string) {
    return courses.find((course) => course.slug === slug);
  }
}
