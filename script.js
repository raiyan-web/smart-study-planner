// ...existing code...
class Planner {
    constructor() {
        this.subjects = [];
    }

    renderSubjects() {
        const container = document.getElementById('subjectsList');
        
        if (this.subjects.length === 0) {
            container.innerHTML = '<p class="no-data">No subjects added yet</p>';
            return;
        }

        container.innerHTML = this.subjects.map(subject => {
            const progress = (subject.hoursStudied / subject.targetHours) * 100;
            return `
                <div class="subject-card" style="border-left: 8px solid ${subject.color};">
                    <h3>${subject.name}</h3>
                    <p>Target Hours: ${subject.targetHours}</p>
                    <p>Hours Studied: ${subject.hoursStudied}</p>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${progress > 100 ? 100 : progress}%; background: ${subject.color};"></div>
                    </div>
                    <button class="delete-btn" onclick="planner.deleteSubject(${subject.id})">Delete</button>
                </div>
            `;
        }).join('');
    }
}
// ...existing code...