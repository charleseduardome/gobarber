import { render } from '@testin-library/react';
import SignIn from '../../pages/SignIn';

describe('SignIn Page', () => {
  it('should be able to sign in', () => {
    const result = render(<SignIn />);
  });
});
