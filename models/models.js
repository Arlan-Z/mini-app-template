// Course Type
class Course {
    constructor(id, title, description, requiredLevel, expReward, rewardTokens, sections) {
        this.id = id; // Long
        this.title = title; // String
        this.description = description; // String
        this.requiredLevel = requiredLevel; // int
        this.expReward = expReward; // int
        this.rewardTokens = rewardTokens; // int
        this.sections = sections; // Set of Section objects
    }
}

// Section Type
class Section {
    constructor(id, title, content, course, assignment) {
        this.id = id; // Long
        this.title = title; // String
        this.content = content; // String (LOB)
        this.course = course; // Course object (ManyToOne)
        this.assignment = assignment; // Assignment object (OneToOne)
    }
}

// Assignment Type
class Assignment {
    constructor(id, question, answer, section, expReward, rewardTokens) {
        this.id = id; // Long
        this.question = question; // String
        this.answer = answer; // String
        this.section = section; // Section object (ManyToOne)
        this.expReward = expReward; // int
        this.rewardTokens = rewardTokens; // int
    }
}

// User Type
class User {
    constructor(id, firstName, lastName, username, photoUrl) {
        this.id = id; // Long
        this.firstName = firstName; // String
        this.lastName = lastName; // String
        this.username = username; // String
        this.photoUrl = photoUrl; // String
    }
}
