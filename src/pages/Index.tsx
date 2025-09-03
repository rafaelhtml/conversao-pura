import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Phone, Zap, TrendingUp, Play, Star, Shield, Clock, Users } from "lucide-react";
import { Suspense } from "react";

const LoadingSpinner = () => (
  <div className="min-h-screen bg-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>
      <p className="text-white mt-4 text-lg">Carregando...</p>
    </div>
  </div>
);

const IndexContent = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header with Urgency Badge */}
      <div className="bg-red-600 text-center py-3">
        <Badge variant="secondary" className="bg-red-500 text-white border-0 text-sm font-bold animate-pulse">
          🔥 OFERTA DE LANÇAMENTO - ÚLTIMAS HORAS
        </Badge>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white leading-tight">
              Transforme Sua Prospecção em 
              <span className="block text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text">
                Máquina de Vendas Automática
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pare de desperdiçar tempo com ligações manuais. Aprenda a criar robôs inteligentes que fazem a prospecção por você e entregam apenas <span className="text-green-400 font-semibold">leads quentes</span> no seu WhatsApp.
            </p>
          </div>

          {/* Main Value Proposition */}
          <Card className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 border-orange-500/40 border-2 my-12 p-8 shadow-2xl shadow-orange-500/30 rounded-2xl">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 leading-tight bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Aprenda A Criar Robôs Que Automatizam Sua Prospecção Por Ligação
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Seus robôs irão <span className="text-green-500 font-semibold">ligar automaticamente</span>, 
              <span className="text-orange-500 font-semibold"> ofereccer seu produto</span> e 
              <span className="text-blue-400 font-semibold"> chamar no WhatsApp apenas quem demonstrou interesse</span>
            </p>
            
            {/* Automation Flow */}
            <div className="bg-slate-700/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-center text-white mb-6">🤖 SEU FUNIL DE VENDAS AUTOMÁTICO</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-white">1. ROBÔ LIGA</p>
                  <p className="text-xs text-gray-300">Automaticamente</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-white">2. OFERECE</p>
                  <p className="text-xs text-gray-300">Seu produto/serviço</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-white">3. QUALIFICA</p>
                  <p className="text-xs text-gray-300">Identifica interesse</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-white">4. WHATSAPP</p>
                  <p className="text-xs text-gray-300">Só quem tem interesse</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-900/20 border border-green-500 p-4 rounded-lg">
              <p className="text-lg font-bold text-green-400 text-center">
                ✨ RESULTADO: Você recebe apenas LEADS QUENTES no WhatsApp!
              </p>
            </div>
          </Card>

          <div className="bg-green-900/20 border border-green-500 p-4 rounded-lg mb-8 max-w-3xl mx-auto">
            <p className="text-lg font-bold text-green-400 mb-2">
              ✅ SUPER SIMPLES - SEM PROGRAMAÇÃO!
            </p>
            <p className="text-gray-300 mb-3">
              Método 100% visual e passo a passo. Qualquer pessoa consegue implementar, mesmo sem conhecimento técnico.
            </p>
            <p className="text-orange-500 font-semibold">
              ⚡ Em apenas 60 minutos você vai dominar todo o processo!
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-300 mb-2">
              Seus vendedores não são <span className="line-through text-gray-500">caçadores de oportunidade</span>
            </p>
            <p className="text-xl font-bold text-white">
              São <span className="text-green-500">fechadores de negócio</span>. Dê a eles{" "}
              <span className="text-orange-500">o cliente certo</span>.
            </p>
          </div>

          {/* Pricing Section */}
          <Card className="bg-slate-800 border-orange-500 border-2 p-8 mb-8">
            <p className="text-lg text-gray-400 mb-2 line-through">De R$197,90 por apenas</p>
            <h3 className="text-5xl font-bold text-green-500 mb-2">8x de R$5,38</h3>
            <p className="text-xl text-gray-300 mb-6">(ou R$37,90 à vista)</p>
            
            <p className="text-orange-500 font-semibold mb-6">
              ⚡ Domine a prospecção por voz antes da concorrência
            </p>

            <Button 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg md:text-xl font-bold py-4 px-4 md:px-8 rounded-lg mb-6 animate-pulse min-h-[60px] flex items-center justify-center"
              onClick={() => window.open('https://pay.hotmart.com/Y100948328W?bid=1753210907342?utm_source=&utm_medium=&utm_campaign=&utm_content=&conjuntodeanuncio=&posicionamento=', '_blank')}
            >
              <span className="text-center">🚀 QUERO COMEÇAR AGORA</span>
            </Button>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-center">Garantia incondicional de 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-center">Acesso vitalício</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-center">Suporte direto</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Sales Increase Section - Inspired by uploaded image */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-orange-500">Aumente as suas vendas</span><br />
              <span className="text-white">sem precisar aumentar a sua equipe</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Enquanto você liga manualmente para leads frios, poderia ter um robô fazendo isso 
              todos os dias e entregando apenas clientes interessados para sua equipe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 p-6 hover:border-orange-500/50 transition-all duration-300">
              <div className="text-center">
                <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Tempo perdido com ligações manuais</h3>
                <p className="text-sm text-gray-400">
                  Sua equipe gasta horas ligando para leads frios que não convertem
                </p>
              </div>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6 hover:border-orange-500/50 transition-all duration-300">
              <div className="text-center">
                <div className="bg-red-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Baixa taxa de conversão</h3>
                <p className="text-sm text-gray-400">
                  Sem qualificação adequada, vendedores perdem tempo com leads frios
                </p>
              </div>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6 hover:border-orange-500/50 transition-all duration-300">
              <div className="text-center">
                <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Dificuldade para escalar vendas</h3>
                <p className="text-sm text-gray-400">
                  Equipe limitada não consegue ligar para toda a base de contatos
                </p>
              </div>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6 hover:border-orange-500/50 transition-all duration-300">
              <div className="text-center">
                <div className="bg-orange-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Dependência de sistemas complexos</h3>
                <p className="text-sm text-gray-400">
                  Plataformas caras com contratos longos e configuração complicada
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/50 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                💡 A Solução: Robôs de Prospecção Inteligentes
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Automatize 100% da prospecção inicial e receba apenas leads qualificados e interessados no WhatsApp
              </p>
              <Button 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg shadow-orange-500/30"
                onClick={() => window.open('https://pay.hotmart.com/Y100948328W?bid=1753210907342?utm_source=&utm_medium=&utm_campaign=&utm_content=&conjuntodeanuncio=&posicionamento=', '_blank')}
              >
                🚀 QUERO AUTOMATIZAR AGORA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Você não precisa de mais vendedores,{" "}
            <span className="text-orange-500">precisa de leads melhores</span>.
          </h2>
          
          <p className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            Se você ainda entrega <span className="text-red-400 font-semibold">lead frio</span> para os seus vendedores,
            sinceramente você está <span className="text-red-400 font-semibold">rasgando dinheiro!</span>
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Before */}
            <Card className="bg-red-900/20 border-red-500 p-6">
              <div className="text-center mb-6">
                <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-400">ANTES (Seu Problema)</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-white">Vendedores gastam tempo caçando leads frios</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-white">Taxa de conversão baixíssima (1-3%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-white">Equipe desmotivada com tantos "NÃOs"</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-white">Dinheiro jogado fora em prospecção manual</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-white">Concorrência sempre um passo à frente</span>
                </li>
              </ul>
            </Card>

            {/* After */}
            <Card className="bg-green-900/20 border-green-500 p-6">
              <div className="text-center mb-6">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-400">DEPOIS (Sua Solução)</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-white">Robô filtra apenas <strong>clientes interessados</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-white">Taxa de conversão dispara (15-30%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-white">Vendedores focam só em <strong>fechar negócios</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-white">ROI multiplicado por <strong>eficiência automatizada</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-white">Você se torna <strong>referência no mercado</strong></span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-orange-500">Automatize a prospecção de ligações</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              E deixe que o robô entregue para sua equipe de vendas apenas
              clientes quentes e <strong className="text-green-500">prontos para fechar</strong>.
            </p>
            
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg"
              onClick={() => window.open('https://pay.hotmart.com/Y100948328W?bid=1753210907342?utm_source=&utm_medium=&utm_campaign=&utm_content=&conjuntodeanuncio=&posicionamento=', '_blank')}
            >
              🚀 QUERO COMEÇAR AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* Audio Examples Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Exemplos de Robôs que você vai aprender a criar
          </h2>
          <p className="text-xl text-center text-gray-300 mb-8">
            Ouça como funciona na prática:
          </p>
          
          <div className="text-center mb-12">
            <Button 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg"
              onClick={() => window.open('https://pay.hotmart.com/Y100948328W?bid=1753210907342?utm_source=&utm_medium=&utm_campaign=&utm_content=&conjuntodeanuncio=&posicionamento=', '_blank')}
            >
              💰 QUERO CRIAR MEUS ROBÔS
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800 p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-500">
                🤖 Robô com sua voz e reconhecimento de fala por IA
              </h3>
               <div className="bg-slate-700 p-4 rounded-lg mb-4">
                 <audio 
                   controls 
                   className="w-full"
                   onError={(e) => console.log('Erro ao carregar áudio 1:', e)}
                   onLoadStart={() => console.log('Carregando áudio 1...')}
                   onCanPlay={() => console.log('Áudio 1 pronto para reproduzir')}
                 >
                   <source src="https://ligacoeslucrativas.com.br/audios/exemplo4.mp3" type="audio/mpeg" />
                   Seu navegador não suporta o elemento de áudio.
                 </audio>
               </div>
              <p className="text-gray-300 text-sm">Venda de serviços</p>
            </Card>

            <Card className="bg-slate-800 p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-500">
                📢 Divulgue grupos e produtos
              </h3>
               <div className="bg-slate-700 p-4 rounded-lg mb-4">
                 <audio 
                   controls 
                   className="w-full"
                   onError={(e) => console.log('Erro ao carregar áudio 2:', e)}
                   onLoadStart={() => console.log('Carregando áudio 2...')}
                   onCanPlay={() => console.log('Áudio 2 pronto para reproduzir')}
                 >
                   <source src="https://ligacoeslucrativas.com.br/audios/exemplo6.mp3" type="audio/mpeg" />
                   Seu navegador não suporta o elemento de áudio.
                 </audio>
               </div>
              <p className="text-gray-300 text-sm">Marketing de produtos</p>
            </Card>

            <Card className="bg-slate-800 p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-500">
                💰 Empréstimos Consignado
              </h3>
               <div className="bg-slate-700 p-4 rounded-lg mb-4">
                 <audio 
                   controls 
                   className="w-full"
                   onError={(e) => console.log('Erro ao carregar áudio 3:', e)}
                   onLoadStart={() => console.log('Carregando áudio 3...')}
                   onCanPlay={() => console.log('Áudio 3 pronto para reproduzir')}
                 >
                   <source src="https://ligacoeslucrativas.com.br/audios/exemplo3.mp3" type="audio/mpeg" />
                   Seu navegador não suporta o elemento de áudio.
                 </audio>
               </div>
              <p className="text-gray-300 text-sm">Serviços financeiros</p>
            </Card>

            <Card className="bg-slate-800 p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-500">
                🏢 Captação de leads B2B
              </h3>
               <div className="bg-slate-700 p-4 rounded-lg mb-4">
                 <audio 
                   controls 
                   className="w-full"
                   onError={(e) => console.log('Erro ao carregar áudio 4:', e)}
                   onLoadStart={() => console.log('Carregando áudio 4...')}
                   onCanPlay={() => console.log('Áudio 4 pronto para reproduzir')}
                 >
                   <source src="https://ligacoeslucrativas.com.br/audios/exemplo2.mp3" type="audio/mpeg" />
                   Seu navegador não suporta o elemento de áudio.
                 </audio>
               </div>
              <p className="text-gray-300 text-sm">Vendas corporativas</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Tenha acesso ao <span className="text-orange-500">método completo</span>
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            Com aulas práticas e diretas
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-slate-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h3 className="font-bold text-white">Robô Básico do Zero</h3>
              </div>
              <p className="text-gray-300">Como criar um robô de ligações básico do zero</p>
            </Card>

            <Card className="bg-slate-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h3 className="font-bold text-white">IA de Reconhecimento</h3>
              </div>
              <p className="text-gray-300">Ative reconhecimento de voz por IA para identificar palavras faladas</p>
            </Card>

            <Card className="bg-slate-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h3 className="font-bold text-white">Integração WhatsApp</h3>
              </div>
              <p className="text-gray-300">Integre o robô ao WhatsApp para chamar os clientes interessados automaticamente</p>
            </Card>

            <Card className="bg-slate-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h3 className="font-bold text-white">Assistente IA para Ofertas</h3>
              </div>
              <p className="text-gray-300">Assistente inteligente que ajuda a criar o áudio da oferta de acordo com seu produto e nicho específico</p>
            </Card>

            <Card className="bg-slate-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h3 className="font-bold text-white">Scripts de Conversão</h3>
              </div>
              <p className="text-gray-300">Scripts testados e aprovados para máxima conversão</p>
            </Card>

          </div>
          
          <div className="text-center mt-12">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg"
              onClick={() => window.open('https://pay.hotmart.com/Y100948328W?bid=1753210907342?utm_source=&utm_medium=&utm_campaign=&utm_content=&conjuntodeanuncio=&posicionamento=', '_blank')}
            >
              🎯 QUERO ACESSO COMPLETO
            </Button>
          </div>
        </div>
      </section>

      {/* About Rafael Soares Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              👨‍🏫 Conheça seu <span className="text-orange-500">mentor</span>
            </h2>
            
            <div className="flex flex-col items-center text-center space-y-8">
              <div>
                <img 
                  src="https://ligacoeslucrativas.com.br/img/rafa02.jpg" 
                  alt="Rafael Soares - Especialista em Automação de Vendas" 
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg mx-auto shadow-2xl"
                />
              </div>
              
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Rafael Soares
                </h3>
                <p className="text-base md:text-lg text-gray-300 mb-4 leading-relaxed">
                  <strong className="text-orange-500">CEO da Telein</strong>, é especialista em automação de vendas por voz, 
                  criador do método Mestre das Ligações Lucrativas, e de várias soluções de automação.
                </p>
                <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
                  Com mais de <strong className="text-green-500">10 anos de experiência</strong> em marketing, 
                  tecnologia e prospecção automatizada, ajudou <strong className="text-orange-500">centenas de empresas</strong> 
                  a escalarem suas vendas usando a URA Reversa.
                </p>
                
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 md:px-8 rounded-lg text-base md:text-lg w-full md:w-auto"
                  onClick={() => window.open('https://pay.hotmart.com/Y100948328W?bid=1753210907342?utm_source=&utm_medium=&utm_campaign=&utm_content=&conjuntodeanuncio=&posicionamento=', '_blank')}
                >
                  🚀 QUERO APRENDER COM O RAFAEL
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Veja os resultados de quem já está usando
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-slate-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Em 30 dias consegui 200 leads qualificados. Minha equipe agora só fecha negócios!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <p className="font-bold text-white">Marco Silva</p>
                  <p className="text-sm text-gray-400">CEO Tech Solutions</p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Incrível! O robô trabalha enquanto eu durmo. Aumento de 300% nas vendas!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <p className="font-bold text-white">Ana Costa</p>
                  <p className="text-sm text-gray-400">Consultora de Vendas</p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Método simples e direto. Em 1 semana já estava com o robô funcionando perfeitamente."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div>
                  <p className="font-bold text-white">Roberto Lima</p>
                  <p className="text-sm text-gray-400">Empresário</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ / Objection Handling */}
      <section className="bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Perguntas Frequentes
          </h2>

          <div className="text-center mb-8">
            <Button 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg"
              onClick={() => window.open('https://pay.hotmart.com/Y100948328W?bid=1753210907342?utm_source=&utm_medium=&utm_campaign=&utm_content=&conjuntodeanuncio=&posicionamento=', '_blank')}
            >
              📞 SIM, QUERO COMEÇAR HOJE
            </Button>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-slate-700 p-6">
              <h3 className="font-bold text-lg mb-3 text-orange-500">
                🤔 Preciso saber programar para usar?
              </h3>
              <p className="text-gray-300">
                <strong className="text-green-400">ZERO programação necessária!</strong> O curso é 100% visual e passo a passo. Se você sabe usar WhatsApp, consegue criar seu robô. Método super simples para qualquer pessoa.
              </p>
            </Card>

            <Card className="bg-slate-700 p-6">
              <h3 className="font-bold text-lg mb-3 text-orange-500">
                🚀 O método funciona em qualquer nicho?
              </h3>
              <p className="text-gray-300">
                Sim! O método é universal e pode ser aplicado em qualquer segmento: imóveis, seguros, cursos, produtos físicos, serviços e muito mais.
              </p>
            </Card>

            <Card className="bg-slate-700 p-6">
              <h3 className="font-bold text-lg mb-3 text-orange-500">
                ⚖️ É legal usar robôs para ligações?
              </h3>
              <p className="text-gray-300">
                Sim! Desde que seguidas as regulamentações, que ensino no curso. O robô atua como um assistente virtual, sempre identificando-se como tal.
              </p>
            </Card>

            <Card className="bg-slate-700 p-6">
              <h3 className="font-bold text-lg mb-3 text-orange-500">
                ⏱️ Quanto tempo leva para implementar?
              </h3>
               <p className="text-gray-300">
                 Com nossa metodologia super simples, se você se dedicar, em apenas <strong className="text-green-400">1 dia</strong> você já terá seu primeiro robô funcionando. Tudo sem programar uma linha de código!
               </p>
            </Card>

            <Card className="bg-slate-700 p-6">
              <h3 className="font-bold text-lg mb-3 text-orange-500">
                💬 É possível integrar com WhatsApp?
              </h3>
              <p className="text-gray-300">
                Sim! O curso ensina como integrar automaticamente com WhatsApp tanto via <strong className="text-green-400">API oficial</strong> (WhatsApp Business) quanto via <strong className="text-blue-400">API não oficial</strong>, para chamar clientes interessados automaticamente.
              </p>
            </Card>

          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Não perca esta oportunidade!
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Enquanto você está lendo isso, seus concorrentes podem estar implementando 
            esta tecnologia. Seja o primeiro do seu mercado a dominar a prospecção automatizada.
          </p>

          <Card className="bg-gradient-to-r from-orange-600 to-red-600 border-0 p-8 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">⏰ OFERTA ESPECIAL - TERMINA EM:</p>
              <div className="flex justify-center gap-4 mb-6">
                <div className="bg-black/30 p-3 rounded">
                  <div className="text-2xl font-bold">23</div>
                  <div className="text-xs">HORAS</div>
                </div>
                <div className="bg-black/30 p-3 rounded">
                  <div className="text-2xl font-bold">59</div>
                  <div className="text-xs">MINUTOS</div>
                </div>
                <div className="bg-black/30 p-3 rounded">
                  <div className="text-2xl font-bold">47</div>
                  <div className="text-xs">SEGUNDOS</div>
                </div>
              </div>
              
              <p className="text-lg line-through opacity-75 mb-2">De R$197,90 por apenas</p>
              <h3 className="text-5xl font-bold text-white mb-2">8x de R$5,38</h3>
              <p className="text-xl mb-6">(ou R$37,90 à vista)</p>

              <Button 
                className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-4 rounded-lg mb-4 min-h-[60px] text-sm md:text-base lg:text-lg"
                onClick={() => window.open('https://pay.hotmart.com/Y100948328W?bid=1753210907342?utm_source=&utm_medium=&utm_campaign=&utm_content=&conjuntodeanuncio=&posicionamento=', '_blank')}
              >
                🚀 QUERO DOMINAR AS LIGAÇÕES LUCRATIVAS
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4 flex-shrink-0" />
                  <span className="text-center">7 dias de garantia</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span className="text-center">Acesso vitalício</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Users className="w-4 h-4 flex-shrink-0" />
                  <span className="text-center">Suporte incluso</span>
                </div>
              </div>
            </div>
          </Card>

          <div className="bg-slate-800 p-6 rounded-lg mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-green-500">
              🎁 BÔNUS EXCLUSIVOS INCLUSOS:
            </h3>
            <ul className="text-left space-y-2 text-white">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Aula para criar áudios que realmente convertem</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Integração com API oficial e não oficial do WhatsApp</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Como ganhar dinheiro vendendo as ligações para outros negócios</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Esta é uma página segura. Seus dados estão protegidos por criptografia SSL. 
            Após a compra, você receberá acesso imediato ao curso por email.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Mestre das Ligações Lucrativas. Todos os direitos reservados.
          </p>
          <p className="text-green-400 text-sm mt-2 font-semibold">
            ✅ GARANTIA INCONDICIONAL DE 7 DIAS - Se não ficar satisfeito, devolvemos 100% do seu investimento!
          </p>
        </div>
      </footer>
    </div>
  );
};

const Index = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <IndexContent />
  </Suspense>
);

export default Index;
