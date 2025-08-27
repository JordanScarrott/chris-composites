import type { APIRoute } from 'astro';
import case_studies from '../data/case_studies.json';
import courses from '../data/courses.json';

// Helper function to strip HTML tags
const stripHtml = (html: string) => html.replace(/<[^>]*>?/gm, '');

export const GET: APIRoute = () => {
  const allContent = [];

  // Process case studies
  for (const study of case_studies) {
    allContent.push({
      type: 'Case Study',
      title: stripHtml(study.title),
      content: stripHtml(study.content),
      url: study.case_study_link,
      sector: study.sector
    });
  }

  // Process courses
  for (const course of courses) {
    const chapterContent = course.chapters.map(c => `${c.title} ${c.description}`).join(' ');
    allContent.push({
      type: 'Course',
      title: course.title,
      content: `${course.description} ${course.whatYouWillLearn.join(' ')} ${chapterContent}`,
      url: `/courses/${course.slug}`,
      tags: course.tags,
    });
  }

  return new Response(JSON.stringify(allContent), {
    headers: { 'Content-Type': 'application/json' },
  });
};
