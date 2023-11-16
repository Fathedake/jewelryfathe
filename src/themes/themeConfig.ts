// theme/themeConfig.ts
import type { ThemeConfig } from 'antd';
import {Button,Input} from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    borderRadius: 6,
    colorPrimary: '#001529',
  },
  components: {
    Button: {
      colorPrimary: '#001529',
      //algorithm:true,
    },
    Input: {
      colorPrimary: '#1677ff',
     // activeBorderColor:'white',
     activeShadow:'0 1px 3px rgba(0, 0, 0, 0.2)',
      //algorithm:true,
    },
  },
};

export default theme;