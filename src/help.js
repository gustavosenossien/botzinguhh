const help = (prefix) => {
	return `> *Sticker Commands* <
Comandos de adesivos * <
comando : *${prefix}sticker* or *${prefix}stiker*
desc : converter imagem/gif/vídeo para adesivo
converter imagem / gif / vídeo em adesivo
uso: responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n
command : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : converter imagem em adesivo removendo o fundo
usage : responder imagem ou enviar imagem com legenda\n
reply image, or send image with caption \ n
responder imagem ou enviar imagem com legenda \ n
comando : *${prefix}toimg*
desc : convert sticker to image
convert sticker to image
converter adesivo em imagem
uso: adesivo de resposta\n
comando : *${prefix}tsticker* or *${prefix}tstiker*
desc : convert text to sticker
convert text to sticker
converter texto em adesivo
uso : *${prefix}tsticker text in here*\n
> *Comandos Meme* <
comandos : *${prefix}meme*
desc : imagens aleatórias de meme [english]
usage : apenas envie o comando\n
comando : *${prefix}memeindo*
desc : imagens aleatórias de meme [indo]
uso : apenas envie o comando\n
> *Outros Comandos* <
comando : *${prefix}gtts*
desc : converter texto em fala / áudio
uso : *${prefix}gtts [cc] [text]*\nexemplo : *${prefix}gtts ja On2-chan*\n
comando : *${prefix}loli*
desc : imagens aleatórias de loli
uso : apenas envie o comando\n
comando : *${prefix}nsfwloli*
desc : random nsfw loli images
random nsfw loli images
imagens aleatórias de nsfw loli
uso: basta enviar o comando\n
comando : *${prefix}url2img*
desc : tirar screenshots da web
uso : *${prefix}url2img [tipe] [url]*\n
comando : *${prefix}simi*
desc : sua mensagem será respondida por simi
usage : *${prefix}simi sua mensagem*\n
comando : *${prefix}ocr*
desc : pegue o texto na foto
uso : responder imagem ou enviar imagem com legenda\n
comando : *${prefix}wait*
desc : pesquisar anime com imagem [Que anime é isso / aquilo]
uso : responder imagem ou enviar imagem com legenda\n
comando : *${prefix}setprefix*
desc : substituir prefixo
uso : *${prefix}setprefix [texto | opcional]*\nexemplo : *${prefix}setprefix ?*
Nota : Este comando só pode ser usado pelo proprietário do bot\n
> *Comandos de Grupo* <
comando : *${prefix}add*
desc : adicionar membro ao grupo
uso : *${prefix}add 62813xxxxx*\n
Nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}kick*
desc : chutar membros do grupo
uso : *${prefix}kick @tagmember*\n
Nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}promote*
desc : make the group member as group admin
make the group member as group admin
tornar o membro do grupo como administrador do grupo
uso : *${prefix}promote @tagmember*\n
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}demote*
desc : make the group admin as group member
make the group admin as group member
tornar o administrador do grupo como membro do grupo
uso: *${prefix}demote @tagmember*\n
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}linkgroup*
desc : pegue o link do grupo
uso : apenas envie o comando
Nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}leave*
desc : Faça o bot sair do grupo
uso : apenas envie o comando
nota : Só pode ser usado por administradores de grupo e próprios do boter\n
comando : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
uso : apenas envie o comando
nota : Este comando pode ser usado se você for um administrador de grupo\n
comando : *${prefix}simih*
desc : ative o modo simi no grupo
uso : *${prefix}simih 1* para ativar o modo simi and *${prefix}simih 0* para desativar o modo simi
nota : Este comando pode ser usado se você for um administrador de grupo\n`
}

exports.help = help
