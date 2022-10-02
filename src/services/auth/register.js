import bcrypt from 'bcrypt';
import Users from '../../helpers/db/users.db.js';
export function register(req, res) {
	const { name, email, password, age, role } = req.body;
	if (Users.some((user) => user.email === email)) {
		return res.status(400).json({ message: 'Email already exists' });
	}
	const encryptedPassword = bcrypt.hashSync(password, 10);
	if (role != 'student' && role != 'teacher') {
		return res.status(400).json({ message: 'must be student or teacher' });
	}
	const user = {
		id: Users.length + 1,
		name,
		email,
		password: encryptedPassword,
		age,
		role,
	};
	Users.push(user);
	return res.json({
		message: 'User registered succesfully',
		data: user,
	});
}
