import { Router, Request, Response } from 'express';

interface requestWithBody extends Request {
  body: { [key: string]: string | undefined };
}
const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
     <form method="POST">
       <div>
         <lable>Email</lable>
         <input name="email" />
       </div>
       <div>
         <lable>Password</lable>
         <input name="password" type="password" />
       </div>
       <button>Submit</button>
     </form>
  `);
});

router.post('/login', (req: requestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'hi@hi.com' && password === 'password') {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});
export { router };
