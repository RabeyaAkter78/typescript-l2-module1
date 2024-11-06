// Type Guard and Type Narrowing:
type AlphaNewmaric = string | number;

const add = (
  param1: AlphaNewmaric,
  param2: AlphaNewmaric
): AlphaNewmaric => {
  if (typeof param1 === 'number' && typeof param2 === 'number') {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString(); // Concatenate as strings
  }
};

const result1 = add(1, 2); // Should return 3 (number)
const result2 = add("1", " 2"); // Should return "1 2" (string)
console.log(result1, result2);

// Using Type Guard for user roles
type NormalUser = {
  name: string; // Fixed name type (was using String constructor)
};

type AdminUser = {
  name: string;
  role: "admin"; // Admin role type
};

const getUserName = (user: NormalUser | AdminUser) => {
  if ('role' in user) {
    console.log(`My name is ${user.name} and my role is ${user.role}`);
  } else {
    console.log(`My name is ${user.name}`);
  }
};

const normalUser: NormalUser = {
  name: "Rabeya"
};

const adminUser: AdminUser = {
  name: "Admin Bhai",
  role: "admin"
};

getUserName(normalUser); // Should log: "My name is Rabeya"
getUserName(adminUser); // Should log: "My name is Admin Bhai and my role is admin"
