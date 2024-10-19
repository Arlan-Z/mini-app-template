
import {user,course} from "../models/models"

function fetchCourses(){
    fetch(`https://demo-pp-latest.onrender.com (https://demo-pp-latest.onrender.com/auth/telegram)/api/courses`)
        .then(response => {
            if(!response.ok) {
                throw new Error('Courses not found');
            }
            return response.json();
        })
        .then(courses=>{
            const courseList = document.getElementById('course_list');
            courseList.innerHTML = '';
            courseList.forEach(course => {
                const courseItem=document.createElement('div');
                courseItem.classList.add('course-item');

                courseItem.innerHTML = `
                    <h3>${course.title}</h3>
                    <p><strong>Description:</strong> ${course.description}</p>
                    <p><strong>Required Level:</strong> ${course.requiredLevel}</p>
                    <p><strong>Experience Reward:</strong> ${course.expReward}</p>
                    <p><strong>Reward Tokens:</strong> ${course.rewardTokens}</p>`;

                courseList.appendChild(courseItem);
            })
        })
        .catch(error => {
            console.error('Error fetching courses:', error);
        });
}

