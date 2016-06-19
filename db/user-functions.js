const handleError = (error) => {
	if (error) {
		console.log('there was and error in user functions', error)
	} else return
}

const isEmpty= array => (array.length===0) ? 
	{exist: false} : 
	{ exist: true, id: array[0].id, passportId: array[0].passportId}



export default (knex) => {
	const addUser = (user) =>{
		return knex('users')
			// .returning('passportId')	
			.insert(user)
			.catch(handleError)
	}

	const findUser = (userId) => {
		return knex('users')
			.where('id', userId)
			.select()
			.catch(handleError)
	}

	const editUser = (user, details) => {
		return knex('users')
			.where('id', user.id)
			.update(details)
			.catch(handleError)
	}

	const isUser = (passportId) => {
		return knex('users')
			.where('passportId', passportId)
			.select('id', 'passportId')
			.then(isEmpty)
			.catch(handleError)
	}

	const processUser = (user) => {
		return new Promise ((resolve, reject) => {
			return isUser(user.passportId)
					.then((userDetails) => {
						if (userDetails.exist) {
							console.log('hella')
							return findUser(userDetails.id)
								.then( (user) => {
										return findUser(userDetails.id)
											.then((user) => {
												resolve(user)
											})
								})
						} else {
							console.log('hello')
							addUser (user)
								.then((newId) => {
									resolve( Object.assign({id: newId[0]}, user) )
								})
						}
					})
				
			})
	}


	return {addUser, findUser, editUser, isUser, processUser}
}
