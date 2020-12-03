const fs = require('fs');

let App = {
    templatePath: './template/template.html',
    getTemplate() {
        return fs.readFileSync(this.templatePath, 'utf8');
    },
    getArgv() {
        let [,,filename, title = filename] = process.argv;
        return [filename, title];
    },
    create() {
        let [filename, title] = this.getArgv();
        if (!filename) {
            throw 'no filename';
        }
        let newFilePath = `./test/${filename}.html`;
        let exist = fs.existsSync(newFilePath);
        if (exist) {
            throw 'file already exist';
        }
        let template = this.getTemplate();
        let content = template.replace('$title', title);
        fs.writeFileSync(newFilePath, content, 'utf8');
        console.log('create success');
    }
};

App.create();
