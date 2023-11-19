const CharacterProfile = require('../../models/CharacterProfile');

exports.getAllCharacterProfiles = async (req, res) => {
    try {
        const profiles = await CharacterProfile.find();
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

exports.getSingleCharacterProfile = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const profile = await CharacterProfile.findById(id);

        if (!profile) {
            return res.status(404).json({ msg: 'Character profile not found'});
        }

        res.json(profile);
    } catch (err) {
        console.error(err.message);

        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Character profile not found'});
        }
        res.status(500).send('Server Error');
    }
};

exports.createCharacterProfile = async (req, res) => {
    try {
        console.log('req.body: ', req.body);
        const newProfile = new CharacterProfile(req.body);
        console.log('newProfile: ', newProfile);
        const savedProfile = await newProfile.save();
        res.json(savedProfile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

exports.deleteCharacterProfile = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('id: ', id);
        const deletedProfile = await CharacterProfile.findByIdAndDelete(id);

        if (!deletedProfile) {
            return res.status(404).json({ msg: 'Character profile not found'});
        }

        res.json({ msg: 'Character profile deleted successfully'});
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Character profile not found'});
        }
        res.status(500).send('Server Error');
    }
};