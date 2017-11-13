package connection;

import java.sql.Connection;
import java.util.Optional;

import es.salesianos.model.User;

public interface ConnectionManager {
	
	public Connection open(String jdbcUrl);
	
	public void close(Connection conn);

	void insert(User user);

	Optional<User> search(User user);

	void update(User user);

}
