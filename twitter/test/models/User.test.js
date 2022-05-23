const User = require('../../app/models/User');


  describe("Unit Tests for User class", () => {
    test('Create an User object', () => {
      const user = new User (1,"ernt","Ernesto","Bio")
      expect(user.id).toBe(1);
      expect(user.username).toBe("ernt");
      expect(user.name).toBe("Ernesto");
      expect(user.bio).toBe("Bio");
      expect(user.dataCreated).not.toBeUndefined();
      expect(user.lastUpdated).not.toBeUndefined();
    });
  })

  
  describe("Unit Tests for getters ", () => {
    test('Add getters', () => {
      const user = new User (1,"ernt","Ernesto","Bio")
      expect(user.getUsername).toBe("ernt");
      expect(user.getBio).toBe("Bio");
      expect(user.getDataCreated).not.toBeUndefined();
      expect(user.getLastUpated).not.toBeUndefined();
    });
  })

    
  describe("Unit Tests for setters ", () => {
    test('Add setters', () => {
      const user = new User (1,"ernt","Ernesto","Bio")
        user.setUsername="Mefus";//metodo
      expect(user.username).toBe("Mefus");
        user.setBio="New Bio"
      expect(user.getBio).toBe("New Bio");
      
    });
  })