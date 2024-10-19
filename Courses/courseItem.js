import {fetchCourses} from "./script";

window.onload =  async function() {
const courses = await fetchCourses();


};
fetchCourses();
export async function getCourseDetails(courseId) {
    try {
        const response = await fetch(`${API_BASE_URL}/${courseId}`);


        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const courseData = await response.json();
        return courseData;
    } catch (error) {
        console.error('Failed to fetch course details:', error);
        throw error;
    }
}