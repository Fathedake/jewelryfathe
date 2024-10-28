import type { ThemeConfig } from 'antd';
const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    borderRadius: 6,
    colorPrimary: '#001529',
  },
  components: {
    Button: {
      colorPrimary: '#001529',
    },
    Input: {
      colorPrimary: '#1677ff',
     activeShadow:'0 1px 3px rgba(0, 0, 0, 0.2)',
    },
  },
};

export default theme;