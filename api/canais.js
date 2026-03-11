module.exports = async (req, res) => {
  const lista = `
#EXTM3U
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",A&E
https://cdn-3.nxplay.com.br/AeE_BRASIL_TK/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",AMC
https://cdn-3.nxplay.com.br/AMC_BRASIL_TK/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",AXN
https://cdn-3.nxplay.com.br/AXN_TK/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",CINEBRASIL TV
https://cdn-3.nxplay.com.br/Cinebrasil/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",FILM&ARTS
https://cdn-3.nxplay.com.br/Film_Arts_Brasil_TK/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",PRIME BOX
http://cdn-4.nxplay.com.br/PRIME_HD/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",SONY
https://cdn-3.nxplay.com.br/SONY_CHANNEL/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",SONY MOVIES
https://cdn-3.nxplay.com.br/SONY_MOVIES/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",SPACE
https://cdn-3.nxplay.com.br/SPACE_TK/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",TNT
https://cdn-3.nxplay.com.br/TNT_TK/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",TNT NOVELAS 
https://cdn-3.nxplay.com.br/TNT_NOVELAS/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",CANAL K
https://cdn-3.nxplay.com.br/cheftv1/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV", DISCOVERY H&H
https://cdn-3.nxplay.com.br/DISCOVERY_HH_NX/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV", DISCOVERY TURBO
https://cdn-3.nxplay.com.br/DISCOVERY_TURBO_NX/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",FASHION TV
http://cdn-4.nxplay.com.br/FASHION_HD/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",FOOD NETWORK
https://cdn-3.nxplay.com.br/FOOD_NETWORK_NX/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",HGTV
https://cdn-3.nxplay.com.br/HGTV_BR_NX/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",LIFETIME
https://cdn-3.nxplay.com.br/LIFE_TIME_TK/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",MUSIC BOX
http://cdn-3.nxplay.com.br/MUSIC_HD/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",TLC
https://cdn-3.nxplay.com.br/TLC_BR_NX/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",TRACE BRASIL
https://cdn-3.nxplay.com.br/TRACE_BRAZUCA/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",TRAVEL BOX
http://cdn-3.nxplay.com.br/TRAVEL_HD/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",WOOHOO
https://cdn-3.nxplay.com.br/WOOHOO_TK/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",WOOHOO SURF
https://cdn-3.nxplay.com.br/WOOHOO_FAST/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",CANAL DO BOI
https://cdn-3.nxplay.com.br/CANAL_DO_BOI_TK/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",RIT
https://cdn-3.nxplay.com.br/RIT_TV/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",FISH TV
https://cdn-3.nxplay.com.br/FISH_TV_NX_TK/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",BAND NEWS
https://cdn-3.nxplay.com.br/BAND_NEWS_TK/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",ANIMAL PLANET
https://cdn-3.nxplay.com.br/ANIMAL_PLANET_NX/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",DISCOVERY CHANNEL
https://cdn-3.nxplay.com.br/DISCOVERY_CHANNEL_NX/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",DISCOVERY SCIENCE
https://cdn-3.nxplay.com.br/DISCOVERY_SCIENCE_NX/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",DISCOVERY THEATER
https://cdn-3.nxplay.com.br/DISCOVERY_THEATER_NX/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",DISCOVERY WORLD
https://cdn-3.nxplay.com.br/DISCOVERY_WORLD_NX/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",DISCOVERY INVESTIGAÇÃO
https://cdn-3.nxplay.com.br/DISCOVERY_ID_NX/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",HISTORY
https://cdn-3.nxplay.com.br/HISTORY_TK/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",HISTORY 2
https://cdn-3.nxplay.com.br/HISTORY_2_TK/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",SBT
https://cdn-3.nxplay.com.br/SBT_HD_TK/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",BAND
http://cdn-3.nxplay.com.br/BAND_HD_PFZ_NX/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",RECORD SP
https://cdn-3.nxplay.com.br/RECORD_PAULISTA_PFZ_NXPLAY_01/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",COM BRASIL
https://cdn-3.nxplay.com.br/COM_BRASIL/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",CANÇÃO NOVA
https://cdn-3.nxplay.com.br/CANCAO_NOVA_TK/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",CARTOON NETWORK
https://cdn-3.nxplay.com.br/CARTOON_NETWORK_TK/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",DISCOVERY KIDS
https://cdn-3.nxplay.com.br/DISCOVERY_KIDS_NX/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",TOONCAST
https://cdn-3.nxplay.com.br/TOONCAST_TK/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",ZOOMOO
https://cdn-3.nxplay.com.br/ZOOMOO_HD_NX_TK/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",GLOBO SP
https://cdn-3.nxplay.com.br/GLOBO_SP_TK/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",TV TEM GLOBO
http://cdn-3.nxplay.com.br/TV_TEM_TK/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",AGROMAIS
https://cdn-3.nxplay.com.br/AGROMAIS_HD/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",E-MUSIC BLACK
https://cdn-3.nxplay.com.br/MEGA_TK/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",E-MUSIC HITS
https://cdn-3.nxplay.com.br/HITTS_TK/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",E-MUSIC CLASSICS
https://cdn-3.nxplay.com.br/CLASSICHITS_TK/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",E-MUSIC LATINO
https://cdn-3.nxplay.com.br/AMERICOLATINO_TK/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",E-MUSIC POP
https://cdn-3.nxplay.com.br/Cult_TK/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",E-MUSIC PARTY
https://cdn-3.nxplay.com.br/BRAmusic_TK/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",E-MUSIC ROCK
https://cdn-3.nxplay.com.br/SCH_TK/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",RECORD NEWS
https://cdn-3.nxplay.com.br/RECORD_NEWS/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",TV BRASIL
https://cdn-3.nxplay.com.br/TV_BRASIL_NX_/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",CANAL GOV
http://cdn-3.nxplay.com.br/TV_BRASIL_2/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",TV SENADO
https://cdn-3.nxplay.com.br/TV_SENADO/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",TV JUSTIÇA
https://cdn-3.nxplay.com.br/TV_JUSTICA/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",TV CÂMARA
https://cdn-3.nxplay.com.br/TV_CAMARA/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",CANAL EDUCAÇÃO
https://cdn-3.nxplay.com.br/TV_ESCOLA/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",SESC TV
https://cdn-3.nxplay.com.br/SESC_TV/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",MASTER TV - UNIVESP TV
https://cdn-3.nxplay.com.br/MASTER_TV/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",CATVE - TV CULTURA
https://cdn-3.nxplay.com.br/CATVE/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",CATVE FM
https://cdn-3.nxplay.com.br/CATVE_2/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",ARTE 1
http://cdn-3.nxplay.com.br/ARTE1/tracks-v1a1/index.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",MUSIC BOX
https://cdn-3.nxplay.com.br/MUSIC_HD/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",BAND SPORTS
https://cdn-3.nxplay.com.br/BAND_SPORTS/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",ESPN
https://cdn-3.nxplay.com.br/ESPN/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",ESPN 2
https://cdn-3.nxplay.com.br/ESPN_2/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",ESPN 3
https://cdn-3.nxplay.com.br/ESPN_3/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",ESPN 4
https://cdn-3.nxplay.com.br/ESPN_4/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",ESPN  6
https://cdn-3.nxplay.com.br/ESPN_EXTRA/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",TRACE BRASIL
https://cdn-3.nxplay.com.br/TRACE_BRAZUCA/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",DE CRIANÇA PARA CRIANÇA
https://cdn-3.nxplay.com.br/dcpc/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",NATIONAL SPORTS CHANNEL
https://cdn-3.nxplay.com.br/PLAYOUT_02_NSC/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",TRIP BRASIL
https://cdn-3.nxplay.com.br/TRIP_BRASIL_FAST/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",PLAY TV
https://cdn-3.nxplay.com.br/PLAY_TV_NXPLAY/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",TV MILAGRO
https://cdn-3.nxplay.com.br/TV_MILAGRO/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV", SÓ NACIONAL
https://cdn-3.nxplay.com.br/europaplay/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",HTO
https://cdn-3.nxplay.com.br/HTO_TV/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",HTO FILMES
https://cdn-3.nxplay.com.br/HTO_Filmes/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",HTO KIDS
https://cdn-3.nxplay.com.br/HTO_KIDS/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",HTO DOCS
https://cdn-3.nxplay.com.br/HTO_DOCS/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",HTO NITRO
https://cdn-3.nxplay.com.br/HTO_NITRO/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",CNN BRASIL
http://cdn-3.nxplay.com.br/CNN_BR/tracks-v2a1/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",CNN BRASIL SD
https://cdn-3.nxplay.com.br/CNN_FAST/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",FUEL TV
http://cdn-3.nxplay.com.br/FUEL_TV_BROADPEAK/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",H! MAIS
https://cdn-4.nxplay.com.br/PLAYOUT_02_HMAIS/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",REDE VIDA
https://cdn-3.nxplay.com.br/REDE_VIDA/tracks-v1a1/index.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",TV APARECIDA
http://cdn-3.nxplay.com.br/TV_APARECIDA/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",FUTURA
http://cdn-3.nxplay.com.br/FUTURA_NX/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",HALLO MOVIES
https://cdn-3.nxplay.com.br/HALLOMOVIES/tracks-v3a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",HALLO CLASSIC
https://cdn-3.nxplay.com.br/HALLOCLASSIC/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",HALLO MUSIC
https://cdn-3.nxplay.com.br/HALLOMUSIC/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",HALLO SERIES
https://cdn-3.nxplay.com.br/HALLOSERIES/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",HALLO ANIME
https://cdn-4.nxplay.com.br/HALLOANIME/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",HALLO DOC
https://cdn-3.nxplay.com.br/HALLODOC/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",UNIQUE TV
https://cdn-3.nxplay.com.br/URBAN_TV/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",UNIQUE SPORTS
https://cdn-3.nxplay.com.br/URBAN_SPORTS/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",URBAN TRAVEL
https://cdn-3.nxplay.com.br/URBAN_TRAVEL/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",URBAN RETRO
https://cdn-3.nxplay.com.br/URBAN_RETRO/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",24H NEWS
https://cdn-3.nxplay.com.br/24H_NEWS/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",CLUBINHO FUN
https://cdn-3.nxplay.com.br/CLUBINHO/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",HELLO TV
https://cdn-3.nxplay.com.br/HELLO/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",INSPIRE
https://cdn-3.nxplay.com.br/INSPIRE/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",YES LIFE
https://cdn-3.nxplay.com.br/YES_LIFE/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",BORA FILMES
https://cdn-3.nxplay.com.br/BORA_FILMES/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",ENTRETENDO
https://cdn-3.nxplay.com.br/ENTRETENDO/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",TV PROMESSAS
https://cdn-3.nxplay.com.br/PROMESSAS/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",UP CHANNEL
https://cdn-3.nxplay.com.br/UPCHANNEL/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",SABOR & ARTE
https://cdn-3.nxplay.com.br/SABOR_E_ARTE/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",PIX TV
https://cdn-3.nxplay.com.br/PIX_TV/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",TV VERDADE
https://cdn-3.nxplay.com.br/TV_VERDADE/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",SBN GLOBAL
https://cdn-3.nxplay.com.br/SBN/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",EURONEWS ESPANHOL
https://cdn-3.nxplay.com.br/EURONEWS/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",NEW BRASIL
https://cdn-3.nxplay.com.br/NEW_BRASIL/tracks-v2a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",TV BRUSQUE
https://cdn-3.nxplay.com.br/TV_BRUSQUE/tracks-v1a1/mono.m3u8
#EXTINF:0 tvg-id="ext" group-title="NXPLAY TV",WARNER CHANNEL
https://cdn-3.nxplay.com.br/WARNER_CHANNEL/tracks-v2a1/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",VIVAX TV
https://cdn-3.nxplay.com.br/VIVAX/tracks-v2a1/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",REDE SUPER
https://cdn-3.nxplay.com.br/REDE_SUPER/tracks-v2a1/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",TV AVIVANDO NAÇÕES
https://cdn-3.nxplay.com.br/AVIVANDO_NACOES/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",KISS TV
https://cdn-3.nxplay.com.br/KISS_TV/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",TV GRAMADO
https://cdn-3.nxplay.com.br/TV_GRAMADO/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",REDE RECON
https://cdn-3.nxplay.com.br/REDE_RECON/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",NGT
https://cdn-3.nxplay.com.br/REDE_NGT/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",DREAM WORKS
https://cdn-4.nxplay.com.br/DREAMWORKS/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",MASPER TV
https://cdn-3.nxplay.com.br/MASPER_TV/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",AGRO CANAL
https://cdn-3.nxplay.com.br/AGRO_CANAL/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",TV EVANGELIZAR
https://cdn-3.nxplay.com.br/EVANGELIZAR/tracks-v2a1/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",TERRAVIVA
https://cdn-3.nxplay.com.br/TERRAVIVA/tracks-v2a1/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",AWTV
https://cdn-4.nxplay.com.br/AWTV/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="https://uniquetv.com.br/canais/planalto.png" group-title="NXPLAY TV",TV PLANALTO NORTE
https://cdn-4.nxplay.com.br/TV_PLANALTO_NORTE/mono.m3u8
#EXTINF:-1 tvg-logo="https://tinyurl.com/22ztcolu" group-title="NXPLAY TV",TCM
https://cdn-4.nxplay.com.br/TCM_TK/tracks-v2a1/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",REDE METRÓPOLE
https://cdn-3.nxplay.com.br/METROPOLE_TK//mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",LOADING 
https://cdn-4.nxplay.com.br/LOADING/index.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",AGRO BRASIL TV
https://cdn-4.nxplay.com.br/AGROBRASIL_TV/index.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",TV TROPICAL RECORDTV
https://cdn-4.nxplay.com.br/TV_TROPICAL_TK/index.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",PARAFERNARIA
https://cdn-4.nxplay.com.br/parafernaria/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV", SÓ PLAY AÇÃO
https://cdn-4.nxplay.com.br/soplay_acao/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",LEO E LULLY
https://cdn-4.nxplay.com.br/LEO_E_LULLY/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",ASTRAL TV
https://cdn-3.nxplay.com.br/TV_ASTRAL/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",E!
https://cdn-3.nxplay.com.br/E_BRASIL/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV", JOVEM PAN NEWS
https://cdn-3.nxplay.com.br/JovemPan/tracks-v1a1/mono.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",TRACE SPORT
https://cdn-3.nxplay.com.br/TRACE_SPORT/index.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",TV RA TIM BUM
https://cdn-3.nxplay.com.br/TV_RA_TIM_BUM/index.m3u8
#EXTINF:-1 tvg-logo="" group-title="NXPLAY TV",NA TELA TV
https://cdn-4.nxplay.com.br/NA_TELA_TV/tracks-v1a1/mono.m3u8

#EXTINF:-1 cuid="104" tvg-name="CNN 🇺🇸" tvg-id="CNN.HD.uk" tvg-logo="https://logo.iptveditor.com/cnn.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CNN 🇺🇸
https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_2_1964000.m3u8

#EXTINF:-1 cuid="105" tvg-name="CNN Internacional 🇺🇸" tvg-id="66c45afaa72e7b0008a2b153" tvg-logo="https://images.pluto.tv/channels/66c45afaa72e7b0008a2b153/colorLogoPNG.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CNN Internacional 🇺🇸
https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/66c45afaa72e7b0008a2b153/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=web&deviceMake=github.com/inspirationlinks&deviceDNT=1

#EXTINF:-1 cuid="106" tvg-name="CNN Highlights 🇺🇸" tvg-id="5421f71da6af422839419cb3" tvg-logo="https://m.media-amazon.com/images/G/01/LCXO_Station_Logos/cnn_headlines_new.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CNN Highlights 🇺🇸
https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00405-rakutentv-cnnfastlg-rakuten-lgpt/playlist.m3u8

#EXTINF:-1 cuid="107" tvg-name="CNN XPRESS 🇲🇽" tvg-id="673248f9030a2c0008033af8" tvg-logo="https://provider-static.plex.tv/epg/cms/production/42343540-3224-4dc1-9c4f-c056ddeb57e3/CNNE_EXPRES_LOGO_DARK.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CNN XPRESS 🇲🇽
https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/673248f9030a2c0008033af8/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=web&deviceMake=github.com/inspirationlinks&deviceDNT=1

#EXTINF:-1 cuid="108" tvg-name="CNN Fast 🇺🇸" tvg-id="GBBD1900008O3" tvg-logo="https://tvpnlogopeu.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/ITBD19000097D_20241022T051548SQUARE.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CNN Fast 🇺🇸
https://amg01448-samsungin-cnnnow-samsungin-4npqg.amagi.tv/playlist/amg01448-samsungin-cnnnow-samsungin/playlist.m3u8
https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/66c45ba803e3b20008d8c294/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=web&servertSideAds=false&&deviceMake=inspirationiptv&deviceDNT=1
https://dqmhiwgbe98iq.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-1e8xhm2nv4xdw/index.m3u8
https://mediapackage-ptcn-source.fullscreen.nz/index.m3u8

#EXTINF:-1 cuid="109" tvg-name="60 Minutes" tvg-id="66b646f9cd0d3100086af83c" tvg-logo="https://m.media-amazon.com/images/G/01/digital/video/Linear_Clean_Slate/60_minutes.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",60 Minutes 🇺🇸
https://stitcher.pluto.tv/stitch/hls/channel/66b646f9cd0d3100086af83c/master.m3u8?deviceType=web&servertSideAds=false&deviceMake=safari&deviceVersion=1&deviceId=spencer&appVersion=1&deviceDNT=0&deviceModel=web&sid=5df26085-4618-11f0-a8d7-0ede5cc29e67
https://dai.google.com/linear/hls/event/nrb-l85CR7SIr-rGXqz4zA/master.m3u8
https://amd-mediator-eolq3tk4la-uk.a.run.app/cbs/map.m3u8?imafw__fw_is_lat=&imafw__fw_vcid2=&imafw__fw_app_bundle=&imafw__fw_us_privacy=1YNY&attmas=not_determined&am.originUrl=https%3A%2F%2Fdai.google.com%2Flinear%2Fhls%2Fevent%2Fnrb-l85CR7SIr-rGXqz4zA%2Fmaster.m3u8&imafw_csid=desktop_web&imafw__fw_did=&ip_addr=195.179.200.80&page_url=https%25253A%25252F%25252Flocalnow.com%25252Fchannels%25252Fcbs-news-chicago-hyperlocal&ua=Mozilla%2F5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%2C%20Gecko%29%20Chrome%2F122.0.0.0%20Safari%2F537.36&width=1920&app_version=0.0.0&height=1080
#EXTINF:-1 cuid="136" tvg-name="CBS News Philadelphia 🇺🇸" tvg-id="CBSNewsPhilly.us" tvg-logo="https://i.imgur.com/FmtTbNY.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CBS News Philadelphia 🇺🇸
https://cbsn-phi.cbsnstream.cbsnews.com/out/v1/5c9ad3e215984b0e9ad845b335216b72/master.m3u8

#EXTINF:-1 cuid="137" tvg-name="CBS News Pittsburgh 🇺🇸" tvg-id="CBSNewsPittsburgh.us" tvg-logo="https://i.imgur.com/Un9IrUh.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CBS News Pittsburgh 🇺🇸
https://cbsn-pit.cbsnstream.cbsnews.com/out/v1/6966dabf8150405ab26f854e3cd6a2b8/master.m3u8

#EXTINF:-1 cuid="138" tvg-name="CBS News Sacramento 🇺🇸" tvg-id="CBSNewsSacramento.us" tvg-logo="https://i.imgur.com/0e1kSGX.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CBS News Sacramento 🇺🇸
https://lineup.cbsivideo.com/playout/c1ed69db-6b71-4581-a937-a70ab4089f8a/index.m3u8

#EXTINF:-1 cuid="139" tvg-name="CBS News 🇺🇸" tvg-id="62310d5a5dc9550007c6f580" tvg-logo="https://m.media-amazon.com/images/X/lsmP/M/1lsmPhEDvDwPGUY.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CBS News 🇺🇸
https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/62310d5a5dc9550007c6f580/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=web&deviceMake=github.com/inspirationlinks&deviceDNT=1

#EXTINF:-1 cuid="140" tvg-name="CBS News Explore 🇺🇸" tvg-id="CABC2300009KD" tvg-logo="https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/CABC2300009KD_20240527T200831SQUARE.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CBS News Explore 🇺🇸
https://d36tuf8zz9b2bm.cloudfront.net/v1/manifest/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-hfw6opvomwxih/82023db6-4ade-4add-be40-13d271a74f89/3.m3u8

#EXTINF:-1 cuid="141" tvg-name="CBS News 24/7 🇺🇸" tvg-id="61e82af27027f9000753c6e4" tvg-logo="https://images.pluto.tv/channels/5a6b92f6e22a617379789618/colorLogoSVG.svg" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CBS News 24/7 🇺🇸
https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/61e82af27027f9000753c6e4/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=web&deviceMake=github.com/inspirationlinks&deviceDNT=1

#EXTINF:-1 cuid="142" tvg-name="Global News Toronto" tvg-id="62cc00b3b821cf00070f82c3" tvg-logo="https://images.pluto.tv/channels/62cc00b3b821cf00070f82c3/colorLogoPNG.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",Global News Toronto
https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/62cc00b3b821cf00070f82c3/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=web&deviceMake=github.com/inspirationlinks&deviceDNT=1

#EXTINF:-1 cuid="143" tvg-name="ABC News Australia 🇦🇺" tvg-id="ABC.NEWS.us" tvg-logo="https://i.ibb.co/mBTzvw8/Abcau.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",ABC News Australia 🇦🇺
https://abc-news-dmd-streams-1.akamaized.net/out/v1/701126012d044971b3fa89406a440133/index.m3u8

#EXTINF:-1 cuid="144" tvg-name="ABC News Live 🇺🇸" tvg-id="USBC39000171G" tvg-logo="" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",
#http

#EXTINF:-1 cuid="145" tvg-name="ABC News Live 🇺🇸" tvg-id="ABC.NEWS.us" tvg-logo="https://images.pluto.tv/channels/6508be683a0d700008c534e4/colorLogoPNG.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",ABC News Live 🇺🇸
https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/6508be683a0d700008c534e4/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=web&deviceMake=github.com/inspirationlinks&deviceDNT=1

#EXTINF:-1 cuid="146" tvg-name="BBC News 🇺🇸" tvg-id="65d92a8c8b24c80008e285c0" tvg-logo="https://m.media-amazon.com/images/G/01/LCXO_Station_Logos/BBC_News_Logo_16_9501.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",BBC News 🇺🇸
https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/65d92a8c8b24c80008e285c0/master.m3u8?deviceId=channel&deviceModel=web&deviceVersion=1.0&appVersion=1.0&deviceType=web&deviceMake=github.com/inspirationlinks&deviceDNT=1

#EXTINF:-1 cuid="147" tvg-name="BBC News 🇺🇸" tvg-id="BBC.NEWS.HD.uk" tvg-logo="https://m.media-amazon.com/images/G/01/LCXO_Station_Logos/BBC_News_Logo_16_9501.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",BBC News₂ 🇬🇧
https://vs-cmaf-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/iptv_hd_abr_v1.mpd

#EXTINF:-1 cuid="148" tvg-name="" tvg-id="" tvg-logo="" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍", 🇺🇸
#http

#EXTINF:-1 cuid="149" tvg-name="TRT World 🇬🇧" tvg-id="TRT.World.HD.uk" tvg-logo="https://i.ibb.co/nP9xpck/trtw.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",TRT World 🇬🇧
https://tv-trtworld.medya.trt.com.tr/master.m3u8

#EXTINF:-1 cuid="150" tvg-name="" tvg-id="" tvg-logo="" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",
#http

#EXTINF:-1 cuid="151" tvg-name="CGTN News 🇬🇧" tvg-id="CGTN.News.ng" tvg-logo="https://graph.facebook.com/ChinaGlobalTVNetwork/picture?width=200&height=200" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",CGTN News 🇬🇧
https://english-livebkali.cgtn.com/live/encgtn.m3u8

#EXTINF:-1 cuid="152" tvg-name="The F1rt 🇺🇸" tvg-id="US1000016Q" tvg-logo="https://us-image.samsungtvplus.com/stretch?url=https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/US1000016Q_20240520T223423CIRCLE.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",The F1rt 🇺🇸
https://d3l2p35bml4f7o.cloudfront.net/v1/manifest/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-wmvu6cnvjroib/02c44a36-5972-4920-bf7c-df7d80bcdc63/3.m3u8

#EXTINF:-1 cuid="153" tvg-name="Press Tvᴸᴼᵂ 🇺🇸" tvg-logo="https://www.presstv.ir/custom/images/site/LOGO.gif" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",Press Tvᴸᴼᵂ 🇺🇸
https://live.presstv.ir/hls/presstv.m3u8

#EXTINF:-1 cuid="154" tvg-name="Al Jazeera 🇬🇧" tvg-id="Al.Jazeera.pt" tvg-logo="https://www.aljazeera.com/favicon_aje.ico" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",Al Jazeera 🇬🇧
https://live-hls-web-aje-fa.getaj.net/AJE/01.m3u8

#EXTINF:-1 cuid="155" tvg-name="DW 🇬🇧" tvg-id="DW.pt" tvg-logo="https://upload.wikimedia.org/wikipedia/commons/8/8e/DW_%28TV%29_Logo_2012.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",DW 🇬🇧
http://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9OC8yMy8yMDIxIDEyOjQ3OjU3IFBNJmhhc2hfdmFsdWU9ZkJ0QTd3enJhWUtYSGsrZHFieUZodz09JnZhbGlkbWludXRlcz00ODA=

#EXTINF:-1 cuid="156" tvg-name="" tvg-id="" tvg-logo="" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",
#http

#EXTINF:-1 cuid="157" tvg-name="Cnews 🇺🇸" tvg-id="" tvg-logo="" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",
#http

#EXTINF:-1 cuid="158" tvg-name="NHK World 🇬🇧" tvg-id="NHK.World.TV.pt" tvg-logo="https://i.ibb.co/JCjsXZm/nhk.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",NHK World 🇬🇧
https://nhkwlive-ojp.nhkworld.jp/hls/live/2003459/nhkwlive-ojp-en/index.m3u8

#EXTINF:-1 cuid="159" tvg-name="NDR" tvg-id="NDR.de" tvg-logo="https://logo.iptveditor.com/ndr.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",NDR 🇩🇪
https://mcdn.ndr.de/ndr/hls/ndr_fs/ndr_hh/master.m3u8

#EXTINF:-1 cuid="160" tvg-name="Das Erste" tvg-id="Das.Erste.de" tvg-logo="https://logo.iptveditor.com/daserste.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",Das Erste 🇩🇪
https://derste247liveint.akamaized.net/hls/live/662735/daserste_int/index.m3u8

#EXTINF:-1 cuid="161" tvg-name="Channel News Asia" tvg-id="Channel.News.Asia.id" tvg-logo="https://logo.iptveditor.com/cna.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ World News 🌍",Channel News Asia
http://d2e1asnsl7br7b.cloudfront.net/7782e205e72f43aeb4a48ec97f66ebbe/index_5.m3u8


#EXTINF:-1 tvg-name="SIC Noticias 🇵🇹" tvg-id="SIC.Notícias.HD.pt" user-agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41" tvg-logo="https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/portugal/sic-noticias-pt.png" group-logo="https://cdn-icons-png.freepik.com/512/2837/2837605.png" group-title="🆁™ News 🇵🇹🇧🇷",SIC Noticias 🇵🇹
https://sicnot.live.impresa.pt/sicnot.m3u8

#EXTINF:-1 tvg-name="SIC Replay 🇵🇹" tvg-id="SIC.Replay.pt" tvg-logo="https://github.com/inspirationlinks/m3u/raw/live/LogosTv/SICReplay.webp" group-logo="https://cdn-icons-png.freepik.com/512/4482/4482879.png" group-title="🆁™ Portugal",SIC Replay 🇵🇹
https://production-fast-sic.content.okast.tv/fa2e8c4385712f9a7dce4ff2dcebac2e/channels/d9070446-8448-455e-8075-773b1ba12562/d47eae0f-ad77-414a-9a1d-2a6628ba18c3/media_.m3u8

#EXTINF:-1 tvg-name="SIC Alta Definição 🇵🇹" tvg-id="SIC.Alta.Definição.pt" tvg-logo="https://github.com/inspirationlinks/m3u/raw/live/LogosTv/SICAltaDefinicao.webp" group-logo="https://cdn-icons-png.freepik.com/512/4482/4482879.png" group-title="🆁™ Portugal",SIC Alta Definição 🇵🇹
https://production-fast-sic.content.okast.tv/fa2e8c4385712f9aa54bbe52b1bd9b6b/channels/d9070446-8448-455e-8075-773b1ba12562/fc831b20-f252-4e7d-8cc5-2d05f4d43c1c/media_.m3u8
`;

  res.setHeader("Content-Type", "application/x-mpegURL");
  res.send(lista);
};
