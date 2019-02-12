package es.salesianos.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import es.salesianos.model.UserAccount;
import es.salesianos.model.User;


public interface Service {

	void createNewUserFromRequest(HttpServletRequest req);

	void insertOrupdateUserAccount(UserAccount user);

	List<UserAccount> listAllAccounts();

	List<Integer> listAllSuma() ;

	void insertOrupdateUser(User user);

	List<User> listAllUser();

	void delete(Integer id);

	void delete(String tablename, Integer id);

}
