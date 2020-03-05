/**
 * element-ui 组件按需引入，切忌引入不必要组件，部分组件因适用性原因弃用
 * 以下组件切忌引入：
 * Upload
 *
 * @see http://element-cn.eleme.io/#/zh-CN/component/quickstart
 */
import './element-variables.scss';
import Vue from 'vue';

import {
  Pagination,
  Table,
  TableColumn,
  Input,
  DatePicker,
  Select,
  Option,
  Popover,
  Button,
  ButtonGroup,
  Cascader,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Checkbox,
  Form,
  FormItem,
  RadioGroup,
  RadioButton,
  Radio,
  TimePicker,
  Loading,
  CheckboxGroup,
  Switch,
  Tag,
  Tooltip,
  Steps,
  Step,
} from 'element-ui';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

const ElementUI = {
  install(Vue) {
    Vue.prototype.$ELEMENT = { size: 'small' };
    Vue.prototype.$loading = Loading.service;

    // 分页组件
    Vue.use(Pagination);

    // 表格组件
    Vue.use(Table);
    Vue.use(TableColumn);

    Vue.use(Form);
    Vue.use(Input);
    Vue.use(DatePicker);
    Vue.use(Select);
    Vue.use(Option);
    Vue.use(Popover);
    Vue.use(Button);
    Vue.use(ButtonGroup);
    Vue.use(Cascader);
    Vue.use(DropdownMenu);
    Vue.use(DropdownItem);
    Vue.use(Dropdown);
    Vue.use(Checkbox);
    Vue.use(FormItem);
    Vue.use(RadioGroup);
    Vue.use(RadioButton);
    Vue.use(Radio);
    Vue.use(TimePicker);
    Vue.use(Loading);
    Vue.use(CheckboxGroup);
    Vue.use(Switch);
    Vue.use(Tag);
    Vue.use(Tooltip);
    Vue.use(Steps);
    Vue.use(Step);

    Vue.component(CollapseTransition.name, CollapseTransition);
  },
};

export default ElementUI;
