const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const characterProfileSchema = new Schema({
    PersonalityTraits: {
        Neuroticism: String,
        Openness: String,
        Conscientiousness: String,
        Extraversion: String,
        Agreeableness: String
    },
    PastExperiences: [{
        Event: String,
        Reaction: String,
        LearningOutcome: String
    }],
    CulturalBackground: {
        Culture: String,
        Norms: [String],
        Values: [String]
    },
    EventContext: {
        Location: String,
        Nature: String,
        TimeOfDay: String
    },
    EmotionalState: {
        CurrentMood: String,
        StressLevel: String
    },
    CognitiveAppraisal: {
        Perception: String,
        CopingAbilities: String
    },
    SocialSupport: {
        FamilySupport: String,
        FriendSupport: String
    },
    PhysicalHealth: {
        EnergyLevel: String,
        HealthStatus: String
    },
    InformationAndKnowledge: {
        UnderstandingLevel: String,
        PreviousKnowledge: String
    },
    Expectations: {
        EventExpectation: String,
        Preparedness: String
    }
});

const CharacterProfile = mongoose.model('CharacterProfile', characterProfileSchema);

module.exports = CharacterProfile;
