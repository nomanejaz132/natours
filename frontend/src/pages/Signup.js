import React from 'react';

const Signup = () => {
  return (
    <main class="main">
      <div class="login-form">
        <h2 class="heading-secondary ma-bt-lg">Create your account</h2>
        <form class="form form--signup">
          <div class="form__group">
            <label class="form__label" for="name">
              Your Name
            </label>
            <input class="form__input" id="name" type="text" required="" />
          </div>
          <div class="form__group">
            <label class="form__label" for="email">
              Email address
            </label>
            <input
              class="form__input"
              id="email"
              type="email"
              placeholder="you@example.com"
              required=""
            />
          </div>
          <div class="form__group ma-bt-md">
            <label class="form__label" for="password">
              Password
            </label>
            <input
              class="form__input"
              id="password"
              type="password"
              placeholder="••••••••"
              required=""
              minlength="8"
            />
          </div>
          <div class="form__group ma-bt-md">
            <label class="form__label" for="password-confirm">
              Confirm Password
            </label>
            <input
              class="form__input"
              id="password-confirm"
              type="password"
              placeholder="••••••••"
              required=""
              minlength="8"
            />
          </div>
          <div class="form__group">
            <button class="btn btn--green">Sign up</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
