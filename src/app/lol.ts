import { TextCommand } from '../../classes';
const { inspect } = require('util');
import messageCreate from '../../events/messageCreate';

var sudo = [892689836249591849,532914066558156800,688308495384313866,782110657142194176]
// define user as string
var user = '';
export default {
    name: 'eval',

    callback: async ({ client, message, user, channel }) => {
        if (sudo.includes(user.id) == false ) return; // only authorized people can access this command 
        
        const code = message.content.split(" ").slice(1).join(" ");

        try {
          let output = inspect(await eval(code));
            
          message.channel.send(output, { code:'ts'})
        } catch (error) {
          message.channel.send('`eval() output is too long to display :/`')
        }
    },
} as TextCommand;