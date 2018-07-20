import subjects from './subject/index';

export default (app) => {

    app.use('/subjects', subjects)

}