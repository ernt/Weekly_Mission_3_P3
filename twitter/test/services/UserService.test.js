const UserService = require('../../app/services/UserService');



  describe("Test for UserService", () => {
    test('1. Create a new user using the UserService', () => {
      const user = UserService.create(1,"ernt","Ernesto")
      expect(user.id).toBe(1);
      expect(user.username).toBe("ernt");
      expect(user.name).toBe("Ernesto");
      expect(user.bio).not.toBeUndefined();
      
    });
  })

  describe("Test for UserService", () => {
    test('2. Get all user data in a list  ', () => {
      const user = UserService.create(1,"ernt","Ernesto")
      const userInfoInList = UserService.getInfo(user)
      expect(userInfoInList[0]).toBe(1);
      expect(userInfoInList[1]).toBe("ernt");
      expect(userInfoInList[2]).toBe("Ernesto");
      expect(userInfoInList[3]).not.toBeUndefined();
      
    });
  })

  describe("Test for UserService", () => {
    test('3. Update username  ', () => {
      const user = UserService.create(1,"ernt","Ernesto")
      UserService.updateUserUsername(user,"mefus")
      expect(user.username).toBe("mefus");
    
      
    });
  })

  
  describe("Test for UserService", () => {
    test('4. Given a list of users give me the list of username ', () => {
      const user1 = UserService.create(1,"ernt1","Ernesto")
      const user2 = UserService.create(1,"ernt2","Ernesto")
      const user3 = UserService.create(1,"ernt3","Ernesto")
      const usernames=UserService.getAllUsernames([user1,user2,user3])
      expect(usernames).toContain("ernt1");
      expect(usernames).toContain("ernt2");
      expect(usernames).toContain("ernt3");
    
      
    });
  })