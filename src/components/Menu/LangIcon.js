import Lang from '../../content/images/lang.svg';
import styled from 'styled-components';

const LangIcon = styled.img.attrs({
  alt: 'Toggle language',
  src: Lang
})`
  height: 2rem;
  cursor: pointer;
`;
export default LangIcon;
