import { Telegraf } from 'telegraf';

const bot = new Telegraf(Bun.env.BOT_TOKEN!);

bot.catch(e => {
  console.error(e)
});

bot.start(async (ctx) => {
    console.log('Main started')
    ctx.setChatMenuButton({
        type: 'web_app',
        text: 'Открыть мой сайт',
        web_app: {
            url: 'https://google.com'
        }
    })
    
    await ctx.reply('Мое первое сообщение', {
        reply_markup: {
            keyboard: []
        }
    });
})

bot.command('ping', ctx => ctx.reply('pong'))


bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))