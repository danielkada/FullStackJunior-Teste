const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async index(request, response) {
    const users = await UsersRepository.findAll();

    if (users.length === 0) {
      return response.status(200).json({ message: 'No registered user!' });
    }

    return response.status(202).json(users);
  }

  async show(request, response) {
    const { user_id } = request.params;

    let user = await UsersRepository.findById(user_id);
    [user] = user;

    if (!user) {
      response.status(400).json({ error: 'User not found!' });
    }

    return response.status(200).json(user);
  }

  async store(request, response) {
    const { email, password } = request.body;

    if (!email || !password) {
      return response.status(400).json({ error: 'Email/Password is required!' });
    }

    const userWithThisEmail = await UsersRepository.findByEmail(email);

    if (userWithThisEmail.length) {
      return response.status(400).json({ error: 'This email is already in use!' });
    }

    await UsersRepository.create({ email, password });
    return response.status(201).json({
      message: 'User created successfully!',
      created_user: await UsersRepository.findByEmail(email),
    });
  }

  async update(request, response) {
    const { email, password } = request.body;
    const { user_id } = request.params;

    if (!email || !password) {
      return response.status(400).json({ error: 'Email/Password is required!' });
    }

    let userExists = await UsersRepository.findById(user_id);
    [userExists] = userExists;
    if (!userExists) {
      return response.status(400).json({ error: 'User not found' });
    }

    let userWithThisEmail = await UsersRepository.findByEmail(email);
    [userWithThisEmail] = userWithThisEmail;
    if (userWithThisEmail) {
      if (user_id !== userWithThisEmail.id.toString()) {
        return response.status(400).json({ error: 'This email is already in use!' });
      }
    }

    await UsersRepository.update({ id: user_id, email, password });
    return response.status(201).json({
      message: 'User changed successfully!',
      changed_user: await UsersRepository.findByEmail(email),
    });
  }

  async delete(request, response) {
    const { user_id } = request.params;

    let userExists = await UsersRepository.findById(user_id);
    [userExists] = userExists;
    if (!userExists) {
      return response.status(400).json({ error: 'User not found' });
    }

    await UsersRepository.delete(user_id);

    return response.status(200).json({
      message: 'User successfully deleted!',
      deleted_user: userExists,
    });
  }

  async deleteAll(request, response) {
    const users = await UsersRepository.findAll();
    if (users.length === 0) {
      return response.status(200).json({ message: 'No registered user!' });
    }

    await UsersRepository.deleteAll();

    return response.status(200).json({
      message: 'Users successfully deleted!',
      users_deleted: users,
    });
  }
}

module.exports = new UserController();
