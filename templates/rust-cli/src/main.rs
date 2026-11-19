use clap::{Parser, Subcommand};

#[derive(Parser)]
#[command(name = "{{projectName}}")]
#[command(about = "A CLI application bootstrapped with setupkaro", long_about = None)]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    /// Say hello
    Hello {
        /// Name to greet
        name: String,
    },
    /// Show version info
    Version,
}

fn main() -> anyhow::Result<()> {
    let cli = Cli::parse();

    match &cli.command {
        Commands::Hello { name } => {
            println!("Hello, {}! Welcome to {{projectName}}!", name);
        }
        Commands::Version => {
            println!("{{projectName}} 1.0.0");
        }
    }

    Ok(())
}