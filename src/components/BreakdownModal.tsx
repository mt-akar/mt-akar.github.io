'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Briefcase, DollarSign } from 'lucide-react';

interface BreakdownModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BreakdownModal({ isOpen, onClose }: BreakdownModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const projects = [
    // Healthcare
    { name: 'Pathology AI', category: 'Healthcare' },
      
    // Accessibility
    { name: 'InclusAI', category: 'Accessibility' },
    
    // Web3/Crypto
    { name: 'RPC Studio', category: 'Web3/Crypto' },
    { name: 'Web3 Studio', category: 'Web3/Crypto' },
    { name: 'Spark', category: 'Web3/Crypto' },

    // Fintech
    { name: 'Cointribute', category: 'Fintech' },
    { name: 'Coin Checkout', category: 'Fintech' },
    { name: 'Parator', category: 'Fintech' },
    
    // Design
    { name: 'Test Maker', category: 'Design' },
    
    // Education
    { name: 'Albiders', category: 'Education' },
    
    // Productivity
    { name: 'Habiracker', category: 'Productivity' },
      
    // Developer Tools
    { name: 'Kinesis Dotnet', category: 'Developer Tools' },
    { name: 'Kinesis Explorer', category: 'Developer Tools' },
    { name: 'Bottom Nav Layout', category: 'Developer Tools' },
    { name: 'Roger that', category: 'Developer Tools' },
      
    // Game
    { name: 'Date Night', category: 'Game' },
      
    // Portfolio
    { name: 'Portfolio', category: 'Portfolio' },
  ];

  const valueBreakdown = [
    {
      category: 'Work Experience',
      subtotal: '$2,400,000',
      items: [
        {
          name: 'Albiders',
          entries: [
            {
              calculation: 'EdTech startup value before strategic exit',
              value: '$100,000',
              description: 'Founded EdTech startup, led 17-person team, delivered MVP in 8 months with successful exit execution.'
            }
          ]
        },
        {
          name: 'Time Base Six',
          entries: [
            {
              calculation: 'Automation reducing operational overhead for $10M+ crypto assets',
              value: '$500,000',
              description: 'Eliminated need for additional hires through operational automation while managing massive scale infrastructure.'
            },
            {
              calculation: 'Managed $10M+ cryptocurrency assets with 100% uptime',
              value: '$1,500,000',
              description: 'Operated over 12,000 virtual machines running Pocket Network nodes across 26 blockchain networks with zero security incidents.'
            }
          ]
        },
        {
          name: 'Kinesis Network',
          entries: [
            {
              calculation: 'Infrastructure value from resource orchestration and SDK development',
              value: '$300,000',
              description: 'Co-designed data center management suite and built Kinesis SDK for ecosystem expansion.'
            }
          ]
        }
      ]
    },
    {
      category: 'Independent Projects',
      subtotal: '$1,200,000',
      items: [
        {
          name: 'Cointribute',
          entries: [
            {
              calculation: 'Zero-fee donation infrastructure value',
              value: '$200,000',
              description: 'Platform enabling direct wallet-to-wallet charitable giving. 8 verified charities, $10K+ donations facilitated, 100% self-custodial.'
            }
          ]
        },
        {
          name: 'Pathology AI',
          entries: [
            {
              calculation: '616 hours saved × $650/hour (medical professional rate)',
              value: '$400,000',
              description: 'Automated data extraction reducing research paper preparation from 80 hours to 3 hours. Powered 8 research papers currently in submission.'
            }
          ]
        },
        {
          name: 'InclusAI',
          entries: [
            {
              calculation: 'Government compliance solution addressing EU accessibility requirements',
              value: '$300,000',
              description: 'Enterprise AI platform for government website accessibility. Complex 9-stage processing pipeline, CMS-agnostic integration.'
            }
          ]
        },
        {
          name: 'Other Projects',
          entries: [
            {
              calculation: 'Developer productivity gains from SDK downloads and usage',
              value: '$300,000',
              description: 'Multiple libraries including Kinesis.NET, Web3 Studio SDK, Bottom Nav Layout Flutter package with 1K+ downloads and 82% popularity.'
            }
          ]
        }
      ]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-[#0F1218] border border-white/10 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-600 bg-clip-text text-transparent">
                Numbers Breakdown
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="p-6 space-y-8">
                
                {/* Years Shipping Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-bold">5 Years Shipping</h3>
                  </div>
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                    <p className="text-gray-300 leading-relaxed">
                      Active development and product shipping since <strong className="text-cyan-400">2020</strong>. 
                      This includes full-time work experience, startup founding, and independent project development.
                    </p>
                  </div>
                </div>

                {/* Projects Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-violet-400" />
                    <h3 className="text-xl font-bold">16 Projects Spearheaded</h3>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                    <div className="grid lg:grid-cols-2 gap-6">
                      {Object.entries(
                        projects.reduce((acc, project, index) => {
                          if (!acc[project.category]) acc[project.category] = [];
                          acc[project.category].push({ name: project.name, number: index + 1 });
                          return acc;
                        }, {} as Record<string, { name: string; number: number }[]>)
                      ).map(([category, projectsWithNumbers]) => (
                        <div key={category} className="space-y-3">
                          <h4 className="text-sm font-semibold text-violet-400 border-b border-violet-400/30 pb-1">
                            {category}
                          </h4>
                          <div className="space-y-1">
                            {projectsWithNumbers.map((project) => (
                              <div key={project.name} className="flex items-center gap-2">
                                <span className="text-xs font-bold text-white bg-white/10 rounded-full w-5 h-5 flex items-center justify-center">
                                  {project.number}
                                </span>
                                <span className="text-gray-300 text-sm">{project.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Value Generation Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-6 h-6 text-pink-400" />
                    <h3 className="text-xl font-bold">$3.6M Tangible Value Generated</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {valueBreakdown.map((section) => (
                      <div key={section.category} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-pink-400">{section.category}</h4>
                          <span className="text-lg font-bold text-green-400">{section.subtotal}</span>
                        </div>
                        
                        <div className="space-y-4">
                          {section.items.map((item) => (
                            <div key={item.name} className="border-l-2 border-pink-400/30 pl-4">
                              <h5 className="font-semibold text-gray-200 mb-2 text-sm">{item.name}</h5>
                              
                              <div className="space-y-2 ml-3">
                                {item.entries.map((entry, index) => (
                                  <div key={index}>
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="font-bold text-green-400 text-sm">{entry.value}</span>
                                    </div>
                                    <p className="text-gray-300 text-xs mb-1 font-medium">
                                      {entry.calculation}
                                    </p>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                      {entry.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    {/* Total Summary */}
                    <div className="bg-gradient-to-r from-cyan-400/10 via-violet-600/10 to-pink-600/10 border border-white/20 rounded-xl p-6">
                      <div className="text-center">
                        <h4 className="text-lg font-semibold mb-3">Total Value Generated</h4>
                        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                          $3,600,000
                        </div>
                        <p className="text-gray-400 mt-3 text-sm">
                          Calculated based on time savings, operational efficiency, platform development, 
                          and tangible business outcomes across work experience and independent projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}