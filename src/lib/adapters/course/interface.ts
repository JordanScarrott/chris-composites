import type { Course } from '../../shared/dtos/course.dto';
export type { Course }; // Re-export for convenience

export interface CourseAdapter {
  getAllCourses(): Promise<Course[]>;
  getCourse(slug: string): Promise<Course | undefined>;
}
