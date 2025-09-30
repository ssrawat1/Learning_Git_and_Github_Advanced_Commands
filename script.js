(function greet(msg) {
  console.log(msg);
})('Hello World!');

export function generateFourDigitOtp() {
  return Math.floor(Math.random() * 9000) + 1000;
}

export const getUniqueId = () => {
  return crypto.randomUUID();
};

 