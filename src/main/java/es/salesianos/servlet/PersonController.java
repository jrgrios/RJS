package es.salesianos.servlet;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import es.salesianos.model.UserAccount;
import es.salesianos.service.Service;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping(value = "/api/v1/user")
public class PersonController {

	@Autowired
	private Service service;

	@RequestMapping(value = "/delete/{tablename}/", method = RequestMethod.GET)
	public ResponseEntity delete(@PathVariable String tablename, @RequestParam(required = false) Integer id) {
		service.delete(tablename, id);
		return new ResponseEntity(HttpStatus.OK);
	}

	@PostMapping
	@RequestMapping(value = "/create")
	public ResponseEntity<UserAccount> create(@RequestBody UserAccount user) {
		service.insertOrupdateUserAccount(user);
		return new ResponseEntity<>(user, HttpStatus.CREATED);
	}

	@PostMapping
	@RequestMapping(value = "/list")
	public ResponseEntity<List<UserAccount>> ListAll() {
		return new ResponseEntity<>(service.listAllAccounts(), HttpStatus.CREATED);
	}

}
