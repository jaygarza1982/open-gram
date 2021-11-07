const { exec } = require('child_process');

exports.setup = (req, res) => {
    exec('npx prisma db push --accept-data-loss --schema /prisma/schema.prisma',
    (err, stdout, stderr) => {
        if (err || stderr) {
            console.log(err, stderr);
            return res.status(500).send([err, stderr]);
        }

        res.send(stdout);
    });
}
